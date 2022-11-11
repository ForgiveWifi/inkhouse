import OrderSkeleton from "./OrderSkeleton";
import NoBox from "../ui/NoBox";
import InvoiceItem from "./InvoiceItem";
import { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import BackButton from "../ui/buttons/BackButton";
import CloseButton from "../ui/buttons/CloseButton";
import Loading from "../ui/Loading";

function InvoiceList({loading, invoices}) {

  const [selectedId, setSelectedId] = useState(null)
  console.log(selectedId)
  if (loading || !invoices) {
    return(
      <div className="flexbox-column" style={{ gap: 15, marginTop: 15 }}>
        <OrderSkeleton count={5} /> 
      </div>
    )
  } else
  if (invoices.length === 0) {
    return(<NoBox text="No invoices"/>)
  } else 
  return (
    <>
      <div className="flexbox-column" style={{ gap: 15, marginTop: 15 }}>
        <AnimatePresence>
          {
            invoices.map((invoice,i) => {
              return(
                <InvoiceItem key={i} invoice={invoice}/>
              )
            })
          }
        </AnimatePresence>
      </div>
      {/* {selectedId && <Loading />}
      
        {selectedId && (
        <motion.div layoutId={selectedId} className="background1 radius15" style={{ zIndex:2000, width: 600, height: 300, position: "relative"}}>
          <CloseButton onClick={() => setSelectedId(null)}/>
          <motion.div>open</motion.div>
          <motion.h2>Motion</motion.h2>
        </motion.div>
  )} */}
        
    </>
  );
}

export default InvoiceList;