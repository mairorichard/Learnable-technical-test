import React from "react";
import Bgcover from "../assets/signin-cover.png";
import Signimg from "../assets/signin-img.png";
import Logo from "../assets/logo.png";
import Facebook from "../assets/facebook.png";
import Google from "../assets/google.png";
import Apple from "../assets/apple.png";
import Twitter from "../assets/twitter.png";
import Email from "../assets/email.png";
import Phone from "../assets/phone.png";
import Close from "../assets/close.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const Socials = [
    { icon: Facebook, text: "Continue with Facebook" },
    { icon: Google, text: "Continue with Google" },
    { icon: Apple, text: "Continue with Apple" },
    { icon: Twitter, text: "Continue with Twitter" },
    { icon: Email, text: "Continue with Email" },
    { icon: Phone, text: "Continue with Phone" },
  ];

  return (
    <div className="relative bg-orange-500">
      <Link to={"/"} className="absolute top-4 right-4 md:top-10 md:right-10">
        <img src={Close} alt="" />
      </Link>
      <div
        className="h-full py-12 grid place-items-center"
        // style={{
        //   backgroundImage: "url('../assets/landing.png')",
        //   backgroundPosition: "center",
        //   backgroundSize: "cover",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        <div className="flex items-center mx-5 bg-white rounded-2xl overflow-hidden">
          <div className="flex-[1]">
            <div className="flex flex-col items-center gap-8 mx-4 my-7">
              <div className="">
                <img src={Logo} alt="" />
              </div>

              <div className="flex flex-col text-center gap-2">
                <h1 className="font-medium text-3xl">Log in or Sign up</h1>
                <p className="text-gray-500">
                  Use your email or other serivce to continue with us{" "}
                </p>
              </div>

              <div className="">
                <div className="flex flex-col items-center gap-6">
                  {Socials.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="border cursor-pointer border-gray-500 w-[250px] md:w-[350px] py-2 flex items-center justify-center gap-4 rounded-full"
                      >
                        <div className="">
                          <img src={item.icon} alt="" />
                        </div>
                        <p>{item.text}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* img */}
          <div className="flex-[1] hidden md:block">
            <img
              className="h-full rounded-2xl lg:rounded-none"
              src={Signimg}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-center text-white py-6">
          Developed by Nzedaniel98@gmail.com
        </p>
      </div>
    </div>
  );
};

export default SignIn;
