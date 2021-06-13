import Head from "next/head";
import Router from "next/router";
import { toast } from "react-toastify";
import { IoChevronBackSharp } from "react-icons/io5";
import { RiSearchEyeLine } from "react-icons/ri";

import ThemeChangeSwitch from "../themeChangeSwitch.jsx";
import Config from "../../config.js";

function Navbar({ title="404", description="Not found!" }) { 
  function changeRoute() {
    const newRoute = Router.pathname.match(/\/blog/);
    
    if (newRoute[0] === newRoute.input) {
      Router.push("/");
    } else {
      Router.push("/blog");
    }

    return true;
  }

  return (
    <nav className="flex flex-wrap mt-2 lg:px-16 px-6 lg:py-0 py-2 items-center justify-around">
      <Head>
        <title>{title}</title>     
   
	<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        
      </Head>   
      <button className="px-2 py-2 rounded-full bg-[#d9d8d8] dark:bg-[#260d50]" onClick={changeRoute}>
        <IoChevronBackSharp className="w-6 h-6" />
      </button>

      {typeof window !== "undefined" && (
        <ThemeChangeSwitch />     
      )}
    </nav>
  );
}
export default Navbar;
