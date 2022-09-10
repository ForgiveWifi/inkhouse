// import NavLinks from "../../components/nav-footer/nav/NavLinks";
import HomeText from "../../components/home/HomeText";
import Production from "../../components/home/Production";
import Design from "../../components/home/Design";
import ScrollButton from "../../components/ui/buttons/ScrollButton";
// import { useMediaQuery } from "@mui/material";
import Image from "../../components/ui/Image";

function Home() {

  // const desktopMode = useMediaQuery('(min-width:750px)');

  return (
    <>
      {/* {!desktopMode && <NavLinks /> } */}
      <div className="flexbox-row flex-wrap" style={{ marginTop: "10px"}}>
        <HomeText /> 
        <Image file="BellaCanvas_3001_ChangeColor_01.jpg" alt="Design and Art" width="275px" className="shadow-1"/>
        <Image file="BellaCanvas_3001_White_04.jpg" alt="Design and Art" width="250px" className="shadow-1" style={{ position: "relative", right: "10px"}}/>
      </div>
      <Production />
      <Design />
      <ScrollButton />
    </>
  );
}

export default Home;