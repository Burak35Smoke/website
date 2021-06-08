import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; 

function FavArtists({ artists=[] }) {
  const [isLoaded, setLoad] = useState(false);
	
  return (
    <div className="space-y-4" align="center">
      <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl">My favourite artists</h1>
	   
	  <div className="flex flex-col space-y-4 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-4">
        {artists.map((artist, index) => (
	      <motion.div 
	        className="shadow-xl bg-[#f0efef] rounded-lg m-auto w-96 h-64 relative"
	        whileHover={{ scale: 1.1 }} 
	        whileTap={{ scale: 0.9 }} key={index}>
            <div className="w-96 h-64 bg-gray-600 animate-pulse" />
	        <Image 
              src={artist.image}
              alt={artist.name}
	          layout="fill"
              objectFit="cover"
	          className="rounded-lg" />	

	        <div className="absolute inset-x-0 bottom-0 flex flex-row items-end h-full w-full">
              <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
                <h3 className="text-base font-bold leading-5 uppercase">{artist.name}</h3>
              </div>
            </div>
	      </motion.div>
	    ))}  
	  </div>
	</div>
  );
}
export default FavArtists;