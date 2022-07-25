
import Image from "../ui/Image";

import "./Images.css"

function Images() {

  return (
    <>
      <div className="flexbox-column full-width" style={{ margin: "40px 20px 30px" }}>
        <div className="image-container flex-wrap">

          <div className="img-section1 flexbox-row flex-wrap" >
            <Image file="BellaCanvas_3001_White_04.jpg" alt="BellaCanvas 3001 White 04" width="240px" className="img-1" />
            <Image file="3501_Citron_3513_Grey-Triblend_3501CVC_Athletic-Heather_SPSU22D4_Split_03.jpg" alt="3501 Citron, 3513 Grey Triblend, 3501CVC Athletic-Heather SPSU22D4 Split 03" width="210px" className="img-2" />
          </div>

          <div className="img-section2 flex-wrap" >
            <Image file="BellaCanvas_3001_ChangeColor_01.jpg" alt="BellaCanvas 3001 ChangeColor 01" width="240px" className="img-3" />
            <Image file="3719_Vintage-White_SF21_04.jpg" alt="3719 Vintage-White SF21 04" width="225px" className="img-4" />
          </div>

        </div>
      </div>
    </>
  );
}

export default Images;