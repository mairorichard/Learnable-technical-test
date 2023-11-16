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

      <div className="mx-24 my-12 flex items-center justify-between gap-20">
        {/* left */}
        <div className="">
          <div className="flex flex-col gap-12">
            <div className="">
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
    </div>
  );
};

export default Landing;