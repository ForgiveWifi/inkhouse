import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { toTime, toDate } from "../../utils/time";
import toDollars from "../../utils/toDollars";
import unixToLocalTime from "../../utils/unixToLocalTime";
import "./Invoices.css"
import StatusBox from "./StatusBox";

function InvoiceItem({invoice}) {
  const { id, amount_due, status, due_date, lines} = invoice

  const items = lines.data.reduce((accumulator, value) => {
    return accumulator + value.quantity;
  }, 0);

  return (
    <>
      <Link to={id} className="link full-width">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="invoice-item space-between flexbox-row flex-wrap"
          style={{ height: 75}}
        > 
          <StatusBox status={status} />
          <h5 className="text-center" style={{width: 300}}>{id}</h5>
        
          <h5 className="text-center" style={{width: 100}}>{toDollars(amount_due)}</h5>

          <h5 className="text-center" style={{width: 70}}>{items}</h5>
          
          <div className="flexbox-column" style={{ width: 100}}>
            <h5>{toDate(due_date * 1000, "short")}</h5>
            <h5>{toTime(due_date * 1000)}</h5>
          </div>
          {/* <div className="flexbox" style={{ width: "60px"}}>
            <div>{countShirts(order.items)}</div>
          </div>
          
          <div className="date flexbox-column" style={{ width: "120px"}}>
            <div className="no-wrap">{toDate(created_at, "short")}</div>
            <div>{toTime(created_at)}</div>
          </div> */}
        </motion.div>
      </Link>
    </>
  );
}

export default InvoiceItem;