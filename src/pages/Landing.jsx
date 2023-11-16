import React from "react";
import Navbar from "../components/Navbar";
import Landingimg from "../assets/landing.png";

const Landing = () => {
  return (
    <div>
      {/* Nav */}
      <div className="">
        <Navbar />
      </div>

      {/* main */}

      <div className="mx-5 md:mx-14 lg:mx-24 my-12 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 lg:gap-20">
        {/* left */}
        <div className="">
          <div className="flex flex-col items-center md:items-start gap-6 md:gap-12">
            <div className="text-center md:text-left">
              <p className="text-[#44C3EBCC] text-xl font-medium tracking-wide">
                Trendiest Fashion ever
              </p>
              <p className="tracking-widest text-3xl">
                When you are in doubt, wear a Viss Fashions Denim
              </p>
            </div>
            <div className="">
              <button className="py-2 px-8 bg-[#E87A14] rounded-xl text-white">
                Buy now
              </button>
            </div>
          </div>
        </div>
        {/* /left */}

        {/* right */}
        <div className="">
          <img src={Landingimg} alt="" />
        </div>
        {/* /right */}
      </div>

      <div className="">
        <p className="text-center py-6">Developed by Nzedaniel98@gmail.com</p>
      </div>
    </div>
  );
};

export default Landing;
