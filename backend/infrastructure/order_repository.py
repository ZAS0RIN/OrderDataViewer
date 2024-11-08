import os

import httpx

from domain.exceptions import DataReceiverException
from domain.interfaces import OrderRepository
from domain.models import Order, Product, Component

API_URL = os.getenv('API_ERP_URL')
LOGIN = os.getenv('API_ERP_LOGIN')
PASSWORD = os.getenv('API_ERP_PASSWORD')

auth = httpx.BasicAuth(username=LOGIN, password=PASSWORD)


class ApiOrderRepository(OrderRepository):
    async def get_order_by_id(self, order_id: str) -> Order | Exception:
        async with httpx.AsyncClient() as client:
            url = API_URL
            if not url.endswith('/'):
                url += '/'
            url += f'order/{order_id}'

            try:
                response = await client.get(url, auth=auth)
            except httpx.ConnectError:
                raise DataReceiverException('Внешний источник данных недоступен')

            if response.status_code == 200:
                data = response.json()
                components = [
                    Component(
                        article=code,
                        name=name
                    ) for code, name in data.get("components", {}).items()
                ]

                product = None
                if data["products"]:
                    product = Product(
                        name=data["products"]["product"],
                        count=data["products"]["count"],
                        version=data["products"]["version"],
                        firmware=data["products"]["firmware"],
                        batch=list(data["products"]["batch"].values())
                    )
                return Order(
                    order_id=data["order"],
                    components=components,
                    product=product
                )

            if response.status_code == 404:
                raise DataReceiverException('Заказ не найден')
            elif response.status_code == 401:
                raise DataReceiverException('Не верный логин/пароль при обращении к внешнему источнику данных')
            raise DataReceiverException('Ошибка при получении данных о заказе')

    async def get_order_by_name(self, order_name) -> Order:
        pass
