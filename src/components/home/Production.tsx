
import TextIcon from "../ui/TextIcon";
import Header from "../ui/Header";
import Image from "../ui/Image"
import ClearIcon from '@mui/icons-material/Clear';
import { productionList } from "../../data/productionList"

function Production() {
  return (
    <>
      <div className="flexbox-column full-width" style={{ marginTop: "10px", marginBottom: "10px" }}>

        <Header title="high tech production" id="production" />

        <div className="flexbox-row flex-wrap" >

          <div className="flexbox-column" style={{ alignItems: "flex-end", minWidth: "340px", marginTop: "10px" }}>

            <div className="flexbox-row">
              <h3>no order minimums</h3>
              <div className="text-icon flexbox">
                <ClearIcon sx={{ fontSize: "35px" }} />
              </div>
            </div>
            
            {
              productionList.map((item) => {
                const { text, icon, size, weight } = item
                return (
                  <div className="flexbox-row" >
                    <h3>{text}</h3>
                    <TextIcon icon={icon} size={size} weight={weight} />
                  </div>
                )
              })
            }
          </div>

          <div className="flexbox-column" style={{ margin: "10px auto 0px" }}>

            <div style={{ marginLeft: "10px" }}>
              <Image file="oval_jet_printer.jpg" alt="Oval Jet Printer" width="330px" />
            </div>

            <div style={{ width: " 330px", paddingLeft: "20px", marginTop: "10px", margin: "auto" }} >
              <p>Our smart printing process offers you 3 day turnarounds, 0 order minimums, full image dot to PANTONE calibrated printing, and per garment customization.</p>
            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Production;