import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-24 my-5">
      {/* Logo */}
      <div className="">
        <p className="text-3xl">Viss Fashions</p>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6">
        <p className="cursor-pointer">About</p>
        <p className="cursor-pointer">Clothing</p>
        <p className="cursor-pointer">Accessories</p>
        <p className="cursor-pointer">Services</p>
      </div>

      {/* buttons */}
      <div className="flex items-center gap-3">
        <div className="">
          <button className="py-2 px-8">Log in</button>
        </div>
        <Link to={'/signin'} className="">
          <button className="py-2 px-8 bg-[#E87A14] rounded-xl text-white">
            Sign up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
