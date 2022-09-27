import { motion } from "framer-motion"

function HomeProducts() {
  const productlist = [
    {
      name:"Shirts",
      file: "BellaCanvas_3001_White_04.jpg",
      alt: "Bella Canvas 3001 White",
      position: "0px -30px"
    },
    {
      name: "Hoodies",
      file: "3719_Vintage-White_SF21_04.jpg",
      alt: "3719 Vintage White SF21",
      position: "0px -45px"
    },
    {
      name: "Tank Tops",
      file: "3480_Athletic-Heather_SPSU22D2_04.jpg",
      alt: "3480 Athletic-Heather SPSU22D2",
      position: "0px -20px"
    }
  ]
  return (
    <>
      <div className="flexbox-column" style={{ marginTop: "50px"}}>
      
        <motion.h2 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flexbox-row full-width"
          style={{ maxWidth: "830px", marginBottom: "10px" }}>
          Products 
        </motion.h2>

        <div className="flexbox-row flex-wrap" style={{ justifyContent: "center", padding: "0px 15px", columnGap: "40px", rowGap: "15px", marginBottom: "30px"}}>
          {
            productlist.map(({name, file, alt, position}) => {
              return(
                <motion.div 
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={require(`../../assets/${file}`)} 
                      alt={alt}
                      style={{ objectPosition: position, width: "250px", height: "250px", objectFit: "cover", borderRadius: "15px" }}
                    />
                    
                    <div style={{ position: "relative", bottom: "5px", height: "15px", marginLeft: "5px"}}>{name} </div> 
                  </motion.div>
                </motion.div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default HomeProducts;