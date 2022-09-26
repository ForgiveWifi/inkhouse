import HomePage from "../../components/home-page/HomePage";
import Production from "../../components/home-page/Production";
import Design from "../../components/home-page/Design";
import ScrollButton from "../../components/ui/buttons/ScrollButton";
import ContactForm from "../../components/forms/ContactForm";
import HomeProducts from "../../components/home-page/HomeProducts";

function Home() {

  return (
    <>
      <HomePage />
      
      <Production />
      <Design />
      <HomeProducts />

      <ContactForm />
      <ScrollButton />
    </>
  );
}

export default Home;