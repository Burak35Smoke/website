import Navbar from "../../components/Song/navbar.jsx";
import Footer from "../../components/footer.jsx";
import Spotify from "../../components/Song/spotify.jsx";
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
