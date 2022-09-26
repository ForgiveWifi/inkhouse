import { motion } from "framer-motion"
import Image from "../ui/Image"
import TextIcon from "../ui/icons/TextIcon";
import ClearIcon from '@mui/icons-material/Clear';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import DateRangeIcon from '@mui/icons-material/DateRange';
import { productionList } from "../../data/productionList"

function Production() {

  return (
    <>
      <div className="flexbox-column full-width">

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flexbox-column" 
          style={{ marginBottom: "20px"}}
        >
          <h1 className="text-center">high tech production</h1>

          <p className="full-width text-center" style={{ maxWidth: "400px", marginTop: "15px"}}>
            Our smart printing process offers quick turnarounds, 0 order minimums, full image dot to PANTONE calibrated printing, and per garment customization.
          </p>
        </motion.div>
        

        <div className="flexbox-row flex-wrap" style={{ gap: "20px"}}>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flexbox" style={{ maxWidth: '450px', margin: "auto"}}
          >
            <Image file="oval_jet_printer.jpg" alt="Oval Jet Printer" width="100%" />
          </motion.div>
          

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="flexbox-start" 
            style={{ minWidth: "300px", margin: "auto"}}>

            <div className="flexbox-row">
              <div className="text-icon flexbox">
                <LocalPrintshopIcon sx={{ fontSize: "30px" }} />
              </div>
              <h3>DTG printing</h3>
            </div>

            <div className="flexbox-row">
              <div className="text-icon flexbox">
                <ClearIcon sx={{ fontSize: "35px" }} />
              </div>
              <h3>No order minimums</h3>
            </div>

            <div className="flexbox-row">
              <div className="text-icon flexbox">
                <DateRangeIcon sx={{ fontSize: "30px" }} />
              </div>
              <h3>3 day turnarounds</h3>
            </div>
            
            {
              productionList.map((item, i) => {
                const { text, icon, size, weight } = item
                return (
                  <div key={i} className="flexbox-row" >
                    <TextIcon icon={icon} size={size} weight={weight} />
                    <h3>{text}</h3>
                  </div>
                )
              })
            }
          </motion.div>


        </div>

      </div>
    </>
  );
}

export default Production;