import InvoiceSkeleton from "./InvoiceSkeleton";
import NoBox from "../ui/NoBox";
import InvoiceItem from "./InvoiceItem";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

function InvoiceList({loading, invoices}) {

  if (loading || !invoices) {
    return(
      <div className="flexbox-column" style={{ gap: 10 }}>
        <InvoiceSkeleton count={6} /> 
      </div>
    )
  } else
  if (invoices.length === 0) {
    return(<NoBox text="No invoices"/>)
  } else 
  return (
    <>
      <div className="flexbox-column" style={{ gap: 10 }}>
        {/* <AnimatePresence> */}
          {
            invoices.map((invoice,i) => {
              return(
                <InvoiceItem key={i} invoice={invoice}/>
              )
            })
          }
        {/* </AnimatePresence> */}
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