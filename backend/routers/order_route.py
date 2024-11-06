from fastapi import APIRouter, Depends, HTTPException

from infrastructure.order_repository import ApiOrderRepository
from domain.models import Order
from use_cases.get_order_data import GetOrderDataUseCase

router = APIRouter()


def get_order_use_case():
    repository = ApiOrderRepository()
    return GetOrderDataUseCase(order_repository=repository)


@router.get("/order/{order_id}", response_model=Order)
async def get_order(
        order_id: str,
        use_case: GetOrderDataUseCase = Depends(get_order_use_case)
):
    order = await use_case.execute(order_id)

    if order:
        return order
    else:
        raise HTTPException(status_code=404, detail="Order not found")
