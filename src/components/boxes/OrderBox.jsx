import { Link } from "react-router-dom"
import toDate from "../../utils/toDate";
import toTime from "../../utils/toTime";
import countShirts from "../../utils/countShirts";
import "./OrderBox.css"

function OrderBox(props) {
  const { _id, account, order, created_at } = props.order
  return (
    <>
      <Link to={`/order/${_id}`} className="order-box link flexbox-row full-width shadow-2">
        <div className="order-id">{`#${_id}`}</div>

        <div className="flexbox" style={{ width: "100px"}}>
          <div>{account.name}</div>
        </div>
        
        <div className="flexbox" style={{ width: "60px"}}>
          <div>{countShirts(order.items)}</div>
        </div>
        
        <div className="date flexbox-column" style={{ width: "120px"}}>
          <div className="no-wrap">{toDate(created_at, "short")}</div>
          <div>{toTime(created_at)}</div>
        </div>
      </Link>
    </>
  );
}

export default OrderBox;