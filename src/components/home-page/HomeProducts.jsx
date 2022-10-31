import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

function HomeProducts() {
  const productlist = [
    {
      name:"Bella + Canvas",
      file: "BellaCanvas_3001_White_04.jpg",
      alt: "Bella Canvas 3001 White",
      position: "0px -30px",
      link: "product/new"
    },
    // {
    //   name: "Hoodies",
    //   file: "3719_Vintage-White_SF21_04.jpg",
    //   alt: "3719 Vintage White SF21",
    //   position: "0px -45px"
    // },
    // {
    //   name: "Tank Tops",
    //   file: "3480_Athletic-Heather_SPSU22D2_04.jpg",
    //   alt: "3480 Athletic-Heather SPSU22D2",
    //   position: "0px -20px"
    // }
  ]
  const navigate = useNavigate()
  return (
    <>
      <div className="flexbox-column" style={{ marginTop: "50px"}}>
      
        <motion.h2 
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flexbox-row full-width"
          style={{ maxWidth: "830px", marginBottom: "10px" }}>
          Products 
        </motion.h2>

        <div className="flexbox-row flex-wrap" style={{ justifyContent: "center", padding: "0px 15px", columnGap: "40px", rowGap: "15px", marginBottom: "30px"}}>
          {
            productlist.map(({name, file, alt, position, link}) => {
              return(
                <motion.div 
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  viewport={{ once: true }}
                  onClick={() => navigate(link)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05}}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    
                  >
                  
                  <div style={{ position: "relative"}}> 
                    <div className="product-box radius15" style={{ backgroundColor: "white", top: 0}}></div> 

                    <motion.img 
                      whileHover={{ opacity: 0.8}}
                      src={require(`../../assets/${file}`)} 
                      alt={alt}
                      className="product-box"
                      style={{ position: "absolute", top: 0, objectPosition: position, objectFit: "cover" }}
                    />
                  </div>
                  
                 
                    
                    <h4 style={{ height: 25, marginLeft: 5, marginTop: 6}}>{name.toUpperCase()} </h4> 
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