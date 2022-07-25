import Header from "../ui/Header";
import Image from "../ui/Image";
import "./Design.css"

function Design() {
  return (
    <>
      <div className="flexbox-column full-width flex-wrap">

        <Header title="art + design" id="design"/>

        <div className="card flexbox-row" style={{ maxWidth: "800px", marginTop: "15px" }}>

          <div className="flexbox-column" style={{ marginRight: "30px", marginBottom: "18px" }}>

            <Image file="design_and_art.jpg" alt="Design and Art" width="300px" />

            <div style={{ paddingLeft: "8px", paddingTop: "10px" }}>
              <ul>
                <li>Experienced team of designers</li>
                <li>Seamless consultation process</li>
                <li>3 day prototype turnaround</li>
              </ul>
            </div>

          </div>

          <div className="flexbox-column" style={{ paddingBottom: "30px" }}>

            <p style={{ marginBottom: '20px' }}>
              We offer consultation services to provide customers with custom, unique designs that can be printed on our merchandise.
            </p>

            <p>
              With a team of experienced designers, we aim to provide an experience that ensures design needs are met, and customers are left with a seamless experience in turning their ideas into reality.
            </p>

          </div>

        </div>

      </div>
    </>
  );
}

export default Design;