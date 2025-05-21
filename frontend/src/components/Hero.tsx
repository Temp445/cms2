
import Navbar from "./Navbar";
import logo from "../assets/AceLogo.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {


  return (
    <div className=" relative min-h-fit overflow-hidden " id="top">
      <div className="absolute inset-0 bg-gray-900 z-0"></div>

      <div className="relative min-h-fit overflow-hidden  container mx-auto ">
        <div className="absolute inset-0 bg-radial-[at_50%_120%] from-teal-600   to-gray-900 to-50% z-0"></div>

        {/* <div className="absolute top-20 right-40 w-64 h-64 rounded-full bg-cyan-400 opacity-80 blur-lg z-0 animate-pulse "></div>
        <div className="flex absolute top-16 left-5 md:top-40 md:left-10 w-10 h-10 md:w-16 md:h-16  border border-purple-600 transform rotate-45 opacity-70 z-0 rectangle"></div>
        <div className="flex absolute bottom-20 left-80 md:left-20 md:bottom-32 lg:bottom-20 lg:left-40 w-32 h-8 rounded-full bg-green-400 opacity-60 z-0"></div>
        <div className="flex absolute right-3 bottom-5 md:right-10 md:bottom-10 lg:bottom-20 lg:right-20 w-16 h-1 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-blue-400 opacity-80 z-0"></div>
        <div className="flex absolute top-60  right-20 md:top-32 md:right-28 w-4 h-4 rounded-full border border-green-500 z-0"></div>
        <div className="hidden lg:flex absolute bottom-60 left-20 w-32 h-12 rounded-full bg-cyan-300 opacity-70 z-0"></div>
        <div className="flex absolute top-80 left-3 md:top-96 md:left-56 w-5 h-5 md:w-12 md:h-12 rounded-full bg-cyan-400 opacity-80 z-0"></div>
        <div className="hidden lg:flex absolute bottom-20 right-80 lg:right-60 w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-blue-500 opacity-70 z-0"></div>
        <div className="flex absolute right-3 bottom-44 md:right-10 md:bottom-36 lg:right-20 lg:bottom-52 w-10 h-10 md:w-10 md:h-10 lg:w-16 lg:h-16 rounded-full bg-cyan-500 opacity-70 z-0"></div> */}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 container -mt-12 pb-5 md:mt-2 ">
          <div className="">
            {" "}
            <Navbar />{" "}
          </div>
          <div className="md:hidden flex gap-1 mx-auto justify-center w-full py-3 -ml-2">
            <Image src={logo} alt="logo" className="w-8 h-8" />
            <span className="text-base font-semibold mt-1 text-white">
              ACE CMS
            </span>
          </div>

          <div className=" py-0 pb-5 md:py-20 lg:py-24 text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6">
              Streamline Your Calibration Processes with{" "}
              <span className="text-[#05b860]">
                ACE CMS
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Efficient, compliant, and cloud-based calibration management
              tailored for manufacturing excellence.
            </p>

            <div className="mt-10 ">
              <Link href="#contact"
                className=" text-white bg-black p-2 md:px-10 md:py-3  rounded-md font-semibold  transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
