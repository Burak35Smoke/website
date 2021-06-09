import Head from "next/head";
import Router from "next/router";
import Link from "next/link";
import { toast } from "react-toastify";
import ThemeChangeSwitch from "../themeChangeSwitch.jsx";
import Config from "../../config.js";

function checkIsURL(url) {
  const regex = /(http|https)\:\:\/\//;
	  
  return Boolean(url.match(regex));
}

function Navbar({ title="404", description="Not found!" }) {
	
  return (
    <nav className="flex flex-wrap mt-2 lg:px-16 px-6 lg:py-0 py-2 items-center justify-around bg-[#F2F2F2] dark:bg-[#0c011e]">
	  <Head>
        <title>{title}</title>     
   
	    <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        
      </Head>   
   	  
	  <h1 className={"text-2xl font-semibold"}>{Config.sitename}</h1>
      
      <ul className="flex flex-wrap space-x-2 justify-between text-base pt-4 lg:pt-0">
      {Config.routes.length === 0 ? "" : (
        Config.routes.map((route, index) => (
          <li key={index}>{
            checkIsURL(route.to) ? (
              <Link to={route.to}>
	            <a className={`py-2 px-3 rounded-md hover:bg-[#d9d8d8] dark:hover:bg-[#260d50] block border-b-2 border-transparent`} target="_blank">
                {route.name}
                </a>
              </Link>
            ) : (
              <button className={`py-2 px-3 rounded-md hover:bg-[#d9d8d8] dark:hover:bg-[#260d50] block border-b-2 border-transparent`} onClick={(() => {
                if (route.isMaintenance) {
                  toast.info("Bu sayfanın yapımı sürmekte.");

                  return;
	            }               

	            Router.push(route.to);
	          })}>
 	          {route.name} 
        	  </button>
	        )
          }</li>  
        ))
      )}
	  {typeof window !== "undefined" && (
        <li>
	      <ThemeChangeSwitch />
	    </li>     
	  )}
	  </ul>
	</nav>
  );
}
export default Navbar;