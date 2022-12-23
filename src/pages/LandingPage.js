import React from "react";
import BlurredBG from "../assets/blurredbg.png";
import RoomSpline from "../assets/objects/RoomSpline";

export const LandingPage = () => {
  return (
    <div>
      <div className="flex justify-between mx-32 my-28">
        <div className="w-[35rem] select-none">
          <h1 className="font-bold text-6xl leading-[4.375rem]">
            Welcome To <br />
            <span className="font-semibold">Our 3D World Journey!</span>
          </h1>
          <p className="my-8 leading-7 font-normal">
            Experience an extraordinary visual journey with our latest
            technology. We offer cutting-edge 3D solutions for various needs,
            from product design to architecture visualization.
          </p>
          <button
            className="px-16 py-5 border-4 border-white text-white font-extrabold rounded-full drop-shadow-xl

          bg-gradient-to-r from-pink-500 to-[#f56a44] my-14 hover:scale-110 ease-in-out duration-300"
          >
            Get Started
          </button>
        </div>
        <div className="absolute w-[500px] h-[400px] right-20 top-60">
          <RoomSpline />
        </div>
      </div>
      <div className="absolute overflow-visible right-0 top-36 -z-50">
        <img src={BlurredBG} alt="BlurredBG" />
      </div>
    </div>
  );
};
