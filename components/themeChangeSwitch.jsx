import { useTheme } from "next-themes";
import Config from "../config.js";
import { IoSunnySharp, IoMoon } from 'react-icons/io5';

function ThemeChangeSwitch() {
  const { theme, setTheme } = useTheme();	
  
  function changeTheme() {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    return true;
  }

  return (
    <button className="px-2 py-2 rounded-full bg-[#d9d8d8] dark:bg-[#260d50]" onClick={changeTheme}>
    {theme === "light" ? <IoMoon className="w-6 h-6"/> : <IoSunnySharp className="w-6 h-6" />}
    </button>
  )
}
export default ThemeChangeSwitch;
