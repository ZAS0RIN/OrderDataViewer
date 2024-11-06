from typing import Optional

from domain.interfaces import OrderRepository
from domain.models import Order


class GetOrderDataUseCase:
    def __init__(self, order_repository: OrderRepository):
        self.order_repository = order_repository

    async def execute(self, order_id: str) -> Optional[Order]:
        return await self.order_repository.get_order_by_id(order_id)
