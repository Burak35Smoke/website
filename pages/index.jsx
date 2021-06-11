import { Component } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Portfolio/navbar.jsx";
import Footer from "../components/footer.jsx";
import Hero from "../components/Portfolio/hero.jsx";
import FavouriteArtists from "../components/Portfolio/favouriteArtists.jsx";
import Config from "../config.js";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      discord_user: false
    };
  }
  componentDidMount() {
    (typeof window !== "undefined" && (() => {
      this.ws = new WebSocket("wss://api.lanyard.rest/socket");
   	
      this.ws.onopen = () => {
	this.ws.send(JSON.stringify({
	  op: 2,
          d: {
            subscribe_to_ids: [Config.personalInfo.discordID]
          }
        }));
  	  
        this.heartbeatInterval = setInterval(() => {
          this.ws.send(JSON.stringify({
            op: 3,
            d: "heartbeat"
          }));
        }, 30000)
      }

      this.ws.onmessage = (msg) => {
	const parsedMsg = JSON.parse(msg.data);
        if (!["INIT_STATE", "PRESENCE_UPDATE"].includes(parsedMsg.t)) return;
	const user = parsedMsg.d?.discord_status ? parsedMsg.d : parsedMsg.d[Config.personalInfo.discordID];

	this.setState({ discord_user: user });
      }
    })())
  }
  componentWillUnmount() {
    (typeof window !== "undefined" && (() => {
      if (!this.ws) return;
      
      clearInterval(this.heartbeatInterval);
      this.ws.close();
    })())
  }
  render() {
    return (
      <div>
        <Navbar title={`Home - ${Config.hostname}`} description="SherlockYigit's portfolio home page." siteName={Config.sitename} />
        <motion.div animate={{ y: -10, opacity: 100 }} initial={{ y: 0, opacity: 0 }}>
          <Hero 
            name={Config.personalInfo.name}
	    position={Config.personalInfo.position}
	    description={Config.personalInfo.description}
	    discord_user={this.state.discord_user}
	    birthday={Config.personalInfo.birthday}
	    avatar={"/avatar.webp"}/>  
	  <FavouriteArtists artists={Config.personalInfo.favouriteArtists} />
	  <Footer socialMedias={Config.personalInfo.socialMedias}/>
	</motion.div>
      </div>
    );
  }
}
export default Index;
