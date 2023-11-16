import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="">
      <div className="flex items-center justify-between mx-5 md:mx-12 lg:mx-24 my-5">
        {/* Logo */}
        <div className="">
          <p className="text-3xl">Viss Fashions</p>
        </div>

        {/* Links */}
        <div className="hidden lg:flex items-center gap-6">
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Clothing</p>
          <p className="cursor-pointer">Accessories</p>
          <p className="cursor-pointer">Services</p>
        </div>

        {/* buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="">
            <button className="py-2 px-8">Log in</button>
          </div>
          <Link to={"/signin"} className="">
            <button className="py-2 px-8 bg-[#E87A14] rounded-xl text-white">
              Sign up
            </button>
          </Link>
        </div>

        <div
          onClick={() => setOpen((prev) => !prev)}
          className="flex lg:hidden flex-col gap-2"
        >
          <div className="w-5 h-[2.5px] rounded-full bg-black"></div>
          <div className="w-5 h-[2.5px] rounded-full bg-black"></div>
          <div className="w-5 h-[2.5px] rounded-full bg-black"></div>
        </div>
      </div>

      {/* responsive */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } lg:hidden mx-5 md:mx-12 flex-col gap-5`}
      >
        <div className="">
          <div className="flex flex-col gap-6">
            <p className="cursor-pointer">About</p>
            <p className="cursor-pointer">Clothing</p>
            <p className="cursor-pointer">Accessories</p>
            <p className="cursor-pointer">Services</p>
          </div>
        </div>
        <div className="flex items-center self-center gap-3">
          <div className="">
            <button className="py-2 px-8">Log in</button>
          </div>
          <Link to={"/signin"} className="">
            <button className="py-2 px-8 bg-[#E87A14] rounded-xl text-white">
              Sign up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
