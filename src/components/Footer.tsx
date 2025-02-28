
import { Link } from "react-router-dom";

const Footer = () => {  
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full relative flex items-center justify-between bg-[#012024] px-[2rem]">
      <Link className="text-[1.2rem] flex items-center text-accent" to={"/"}>
        <span className="font-medium">suku</span>
        <span className="font-light">pay</span>
        <span className="w-[10px] h-[10px] block bg-live rounded-full ml-1"></span>
      </Link>

      <p className="text-[.5rem] text-white md:text-[.7rem]">
        &copy; {currentYear} Sukupay. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
