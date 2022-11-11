import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import "./Invoices.css"

function InvoiceItem({invoice}) {
  const { id, amount_due, status, created } = invoice
  return (
    <>
      <Link to={id} className="link full-width">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="invoice-item  flexbox-row"
        > 
          
            <div>{status}</div>
            <div className="order-id">{id}</div>
          
            <div>{amount_due}</div>
            
            <div>{created}</div>
            <div className="flexbox" style={{ width: "60px"}}>
              {/* <div>{countShirts(order.items)}</div> */}
            </div>
            
            <div className="date flexbox-column" style={{ width: "120px"}}>
              {/* <div className="no-wrap">{toDate(created_at, "short")}</div> */}
              {/* <div>{toTime(created_at)}</div> */}
            </div>
          
        </motion.div>
      </Link>
    </>
  );
}

export default InvoiceItem;