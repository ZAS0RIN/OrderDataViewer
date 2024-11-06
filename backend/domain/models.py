from dataclasses import dataclass
from typing import List


@dataclass
class Component:
    article: str
    name: str


@dataclass
class Product:
    name: str
    count: int
    version: str
    firmware: str
    batch: List[str]


@dataclass
class Order:
    order_id: str
    components: List[Component]
    product: Product
