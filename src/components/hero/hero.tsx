import { globe } from "../..";
import Dashboard from "../ui/dashboard";
import HeroBottom from "../ui/hero-bottom";
import HeroTop from "../ui/hero-top";

const Hero = () => {
  return (
    <div className="hero px-[1rem] sm:px-[3rem] py-[2rem] sm:py-[4rem] flex flex-col lg:flex-row justify-between pt-[4rem]">
      <div className="shrink-0 w-full lg:w-[30%]">
        <HeroTop />
        <HeroBottom />
      </div>
      <div className="globe__container shrink-0 w-full lg:w-[40%]">
        <img src={globe} alt="globe" />
      </div>

      <div className="w-full lg:w-[30%]">
        <Dashboard />
      </div>
    </div>
  );
};

export default Hero;
