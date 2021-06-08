import { IoHeartSharp } from 'react-icons/io5';

function Footer({ socialMedias }) {
  return (
    <footer className="flex justify-around mt-4">
	  <div className="flex flex-row">
        <p className="font-medium text-base"> 
	      This website was developed by <a className="text-[#38d7b1]" href="https://github.com/SherlockYigit">Yiğit</a> with
	    </p>
	    <IoHeartSharp className="mt-1 font-medium text-base text-red-600"/>
	  </div>
	</footer>
  );
}
export default Footer
