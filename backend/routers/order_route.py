from fastapi import APIRouter, Depends, HTTPException

from infrastructure.order_repository import ApiOrderRepository
from routers.responses import GetOrderResponse
from use_cases.get_order_data import GetOrderDataUseCase

router = APIRouter()


def get_order_use_case():
    repository = ApiOrderRepository()
    return GetOrderDataUseCase(order_repository=repository)


@router.get("/order/{order_id}", responses=GetOrderResponse)
async def get_order(
        order_id: str,
        use_case: GetOrderDataUseCase = Depends(get_order_use_case)
):
    try:
        order = await use_case.execute(order_id)
    except Exception as error:
        raise HTTPException(
            status_code=500,
            detail=str(error)
        )

    return order
