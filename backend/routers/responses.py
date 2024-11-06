from dataclasses import dataclass

from domain.models import Order


@dataclass
class HTTPError:
    detail: str


GetOrderResponse = {
    200: {
        'model': Order
    },
    500: {
        'model': HTTPError,
        "description": "Статус с ошибкой выполнения, причина утоняется в detail ответа",
    },

}
