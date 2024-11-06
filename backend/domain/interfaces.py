from abc import ABC, abstractmethod

from domain.models import Order


class OrderRepository(ABC):

    @abstractmethod
    def get_order_by_id(self, order_id: str) -> Order:
        pass

    @abstractmethod
    def get_order_by_name(self, order_name: str) -> Order:
        pass
