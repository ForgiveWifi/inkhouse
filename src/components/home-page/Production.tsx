import { motion } from "framer-motion"
import Image from "../ui/Image"
import ClearIcon from '@mui/icons-material/Clear';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import {IoIosShirt} from "react-icons/io"

function Production() {

  const productionList = [
    {
      name: "DTG printing",
      icon: <LocalPrintshopIcon sx={{ fontSize: "30px" }} />,
    },
    {
      name: "No order minimums",
      icon: <ClearIcon sx={{ fontSize: "35px" }} />,
    },
    {
      name: "3 day turnarounds",
      icon: <DateRangeIcon sx={{ fontSize: "30px" }} />,
    },
    {
      name: "Custom neck tags",
      icon: <IoIosShirt style={{ fontSize: "30px" }}/>,
    },
    {
      name: "No color limits",
      icon: <AllInclusiveIcon sx={{ fontSize: "25px" }}/>,
    },
  ]

  return (
    <>
      <div className="flexbox-column full-width">
        <div className="flexbox-column" style={{ margin: "40px 0px 20px"}}>
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flexbox-column text-center" 
          >
            high tech production
          </motion.h1>

          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="full-width text-center" 
            style={{ maxWidth: "400px", marginTop: "15px"}}>
            inkhouse products are printed on high-quality garments, locally in the US.  Our wide variety of styles and colors allows for full customization.  Our smart printing process allows for a quick turnaround.   
          </motion.p>
        </div>
        

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
            
            {
              productionList.map(({name, icon},i) => {
                return(
                  <div key={i} className="flexbox-row">
                    <div className="text-icon flexbox">
                      {icon}
                    </div>
                    <h3>{name}</h3>
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