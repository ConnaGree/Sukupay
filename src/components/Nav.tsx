import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
 
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed z-50 transition-transform duration-300 py-3 px-[3rem] backdrop-blur-lg bg-white/10 border-b border-white/20 rounded-b-xl ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative flex items-center justify-between">
        {/* Left Section: Logo and Stats */}
        <div className="left flex items-center justify-between w-full sm:w-[40%]">
          <Link
            className="text-[1.2rem] flex items-center text-accent"
            to={"/"}
          >
            <span className="font-medium">suku</span>
            <span className="font-light">pay</span>
            <span className="w-[10px] h-[10px] block bg-live rounded-full ml-1"></span>
          </Link>

          <div className="stat__container hidden items-center gap-x-4  md:flex">
            <p className="font-mono text-[1.5rem] text-live flex items-center gap-x-4">
              $10,877
              <span className="text-white font-sans text-[.8rem]">
                Current price pool
              </span>
            </p>
          </div>
        </div>

        {/* Right Section: Links and Hamburger for Mobile */}
        <div className="right flex items-center gap-x-3 sm:gap-x-5">
          {/* Desktop Links */}
          <div className="hidden sm:flex gap-x-3">
            <Link
              className="text-[.75rem] px-3 py-2 rounded-[50px] text-white border-gray-200 border-[1px] bg-white/5 hover:bg-white/20 transition"
              to={"/"}
            >
              What is one world, One dollar?
            </Link>

            <Link
              className="text-[.8rem] text-live px-3 py-2 rounded-[50px] border-live border-[1px] bg-live/10 hover:bg-live/20 transition"
              to={"/"}
            >
              Rules
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <button
            className="sm:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } sm:hidden absolute left-0 right-0 top-[60px] border-gray-200 bg-[#021D21] p-6 space-y-4 rounded-lg shadow-md`}
      >
        <Link
          className="block text-white py-2 px-3 rounded hover:bg-white/20"
          to={"/"}
        >
          What is one world, One dollar?
        </Link>
        <Link
          className="block text-white py-2 px-3 rounded hover:bg-white/20"
          to={"/"}
        >
          Rules
        </Link>
      </div>
    </div>
  );
};

export default Nav;
