import { ThemeProvider } from "next-themes";
import { ToastContainer, Zoom } from "react-toastify";

import "../styles/main.scss";
import "tailwindcss/tailwind.css";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider attribute="class" defaultTheme={"light"} themes={["light", "dark"]}>
	  <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
	    transition={Zoom}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       />
	  <Component {...pageProps} />  
	</ThemeProvider>
  )
}

export default MyApp