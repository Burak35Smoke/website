import Navbar from "../../components/Song/navbar.jsx";
import Footer from "../../components/footer.jsx";
import Hero from "../components/Portfolio/hero.jsx";
import Config from "../../config.js";

function Index() {
  return (
    <div>
      <Navbar title="Song" description="Song"/>
      <Footer socialMedias={Config.personalInfo.socialMedias} />
    </div>
  );
}
export default Index
