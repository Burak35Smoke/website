import { IoHeartSharp } from 'react-icons/io5';

function Footer({ socialMedias }) {
  return (
    <footer className="flex flex-wrap justify-around mt-5 lg:px-16 px-6 lg:py-0 py-2">
      <div className="flex space-x-1 mt-2">
        <p className="font-medium text-base"> 
	  This website was developed by <a className="text-[#38d7b1]" href="https://github.com/SherlockYigit">Yiğit</a> and <a className="text-[#38d7b1]" href="https://github.com/Burak35Smoke">SassteR</a> with
	</p>
	<IoHeartSharp className="mt-1 font-medium text-base text-red-600"/>
      </div>
      <div className="flex space-x-1">
      {socialMedias.map((scM, i) => {
        return (
	  <a key={`scm-${i}`} href={scM.to} className="px-2 py-2 rounded-full bg-[#d9d8d8] dark:bg-[#260d50]">
	    <scM.icon className="w-6 h-6"/>
	  </a>
        );
      })}
      </div>
    </footer>
  );
}
export default Footer
