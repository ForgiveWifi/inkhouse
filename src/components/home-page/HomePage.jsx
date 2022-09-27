import { motion } from "framer-motion"
import Image from "../../components/ui/Image";
import { useMediaQuery } from '@mantine/hooks';

function HomePage() {
  const desktop = useMediaQuery('(max-width: 900px)')
  const mobile = useMediaQuery('(max-width: 600px)')

  return (
    <>
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flexbox-row-start flex-wrap full-width margin-auto" 
        style={desktop ? {maxWidth: "560px", marginBottom: "50px" } : { maxWidth: "800px", marginBottom: "50px" }}
      > 

        <div className="full-width" style={mobile ? { width: "100%"} : { maxWidth: "200px", margin: "40px 20px 0px 20px"}}>
          <div className={mobile ? "flexbox-column margin-auto full-width" : ""} style={{ position: mobile ? "" : "relative", right: mobile ? "" : "18px", marginBottom: mobile ? "0px" : "30px" }}> 
            <h1 style={{ lineHeight: "40px", marginTop: mobile ? "25px" : "0px", marginLeft: mobile ? "0px" : "16px"}}>
              inkhouse
            </h1>
            <h2 className="rainbow flexbox no-wrap text-center max-radius shadow2" style={{ width: "350px", height: "45px", padding: "0px 10px", fontWeight: "500", marginTop: "8px"}}>a merchandise agency</h2>
          </div>
          <div className={mobile ? "text-center" : ""} style={mobile ? { width: "100%", margin: "15px 0px"} : { width:"240px", height: "10px", margin: "25px 0px 10px" }}>
            Our company provides production and design services for apparel.  Turn your ideas into custom merchandise for your store, groups, or events.
          </div>
          
        </div>

        <div className="flexbox-row-start full-width flex-wrap margin-auto" style={{ maxWidth: "500px", paddingRight: "20px", marginTop: mobile ? "0px" : "70px", gap: "5%"}}>
          <div style={{ position: "relative", top: "18%",  width: "45%"}}>
            <Image file="BellaCanvas_3001_ChangeColor_03.jpg" alt="Bella Canvas 3001 White" width="100%" />
          </div>

          <div className="flexbox" style={{ width: "45%"}}>
            <Image file="BellaCanvas_3001_ChangeColor_01.jpg" alt="BellaCanvas 3001 Purple" width="100%" />
          </div>

          <div className="margin-auto-left" style={{ position: "relative", left: "5%", width: "55%", marginTop: mobile ? "3%" : "0px"}}>
            <Image 
              file="3501_Citron_3513_Grey-Triblend_3501CVC_Athletic-Heather_SPSU22D4_Split_03.jpg" 
              alt="3501 Citron, 3513 Grey-Triblend, 3501CVC Athletic-Heather" 
              width="100%" 
            />
          </div>
        </div>
      </motion.div>
      
    </>
  );
}

export default HomePage;