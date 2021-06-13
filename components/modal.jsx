import { motion } from "framer-motion";
import { ImCross } from "react-icons/im";

function Modal({ isOpen, toggleModal, children }) {
  (typeof window !== "undefined" && (
    window.onclick = ((e) => {
      const transparentBgID = "modalTransparentBG";
      if (transparentBgID !== e.target.id && isOpen) return;

      toggleModal(!isOpen);
    })
  ))

  return (
    <div id="modalTransparentBG" className={`${isOpen ? "block" : "hidden"} w-full h-full bg-black
    bg-opacity-50 absolute z-50`}>
      <motion.div 
        className="max-w-sm bg-white w-full space-y-2 px-5 py-5 rounded-xl">
        <button 
	  className="bg-transparent absolute top-0 right-0" onClick={(() => {
            if (!isOpen) return;

	    toggleModal(!isOpen);

	    return true;
	  })}>
          <ImCross className="w-6 h-6" />
	</button>
      {children}
      </motion.div>
    </div>
  );
}
export default Modal;
