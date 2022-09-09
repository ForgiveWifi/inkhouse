import OrderBox from "../boxes/OrderBox";
import OrderSkeleton from "../skeletons/OrderSkeleton";
import NoBox from "../ui/NoBox";

function OrderList({loading, orders}) {
  if (loading || orders === null) {
    return(
      <div className="order-list">
        <OrderSkeleton count={15} />
      </div>
    )
  } else
  if (orders.length === 0) {
    return(<NoBox text="No orders"/>)
  } else 
  return (
    <>
      <div className="order-list">
        {
          orders.map((order,i) => {
            return(
              <OrderBox key={i} order={order} />
            )
          })
        } 
      </div>
    </>
  );
}

export default OrderList;