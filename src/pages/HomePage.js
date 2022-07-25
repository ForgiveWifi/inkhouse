import NavLinks from "../components/nav-footer/NavLinks";
import Images from "../components/home/Images";
import Production from "../components/home/Production";
import Design from "../components/home/Design";
import ScrollButton from "../components/ui/ScrollButton";
import { useMediaQuery } from "@mui/material";

function Home() {

  const desktopMode = useMediaQuery('(min-width:750px)');

  return (
    <>
      {!desktopMode && <NavLinks /> }
      <Images />
      <Production />
      <Design />
      <ScrollButton />
    </>
  );
}

export default Home;