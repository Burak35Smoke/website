import Image from "next/image";
import { FaSpotify } from "react-icons/fa";
import Config from "../../config.js";

function Spotify({ name="none", position="none", description="none", avatar="/logo.gif", discord_user={} }) {
  let statusColor = discord_user?.discord_status;
  if (!statusColor) statusColor = "ring-gray-600";
  else if (statusColor === "online") statusColor = "ring-green-400";
  else if (statusColor === "idle") statusColor = "ring-yellow-400";
  else if (statusColor === "dnd") statusColor = "ring-red-600";
  else if (statusColor === "offline") statusColor = "ring-gray-600";

// Will display time in 10:30:23 format
var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);  return (
    <div className="hero">
      <div className="max-w-2xl space-y-1 lg:mt-4">
        <h1 className="avatar-distance font-semibold text-2xl sm:text-3xl md:text-4xl text-alignment">{name}</h1>
	<h2 className="font-semibold text-[#38d7b1] text-xl sm:text-2xl md:text-3xl text-alignment">{position}</h2>
      {!discord_user?.listening_to_spotify ? "" : (
        <div className="spotify">
	  <FaSpotify className="mt-0.5 font-semibold w-6 h-6 text-green-400 text-alignment" />
	  <h3 className="font-semibold text-lg sm:text-md md:text-lg text-green-400 text-alignment">
		<a>{discord_user?.spotify?.artist} - {discord_user?.spotify?.song} | {discord_user?.spotify?.timestamps?.start} - {discord_user?.spotify?.timestamps?.end}</a>
	 	 </h3>
       	  </div>   
      )}
	      </div>
<div className={`relative rounded-full h-60 w-60 ring-4 ${statusColor}`}>
        <div className="h-60 w-60 rounded-full bg-gray-600 animate-pulse"/>
        <Image 
          src={avatar}
          alt="Profile IMG"
	  layout="fill"
          objectFit="cover"
	  className={`rounded-full h-60 w-60`} />	
      </div>
    </div>
  );
}
export default Spotify;
