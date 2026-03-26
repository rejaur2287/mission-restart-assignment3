import React from "react";
import heroImg from "../../assets/hero.png";
import googlePlay from "../../assets/googlePlay.png";
import appStore from "../../assets/appStore.png";

const Banner = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-6xl font-bold my-4">
        We Build
        <br />
        <span className="text-[#8a2be2]">Productive</span> Apps
      </h1>
      <p className="text-xl text-center w-3/4 mx-auto my-4 text-white/50">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="my-6 space-x-4">
        <button className="btn btn-outline border-gray-600 btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          <img src={googlePlay} alt="" />
          <span>Google Play</span>
        </button>
        <button className="btn btn-outline border-gray-600 btn-xs sm:btn-sm md:btn-md lg:btn-lg">
          <img src={appStore} alt="" />
          <span>App Store</span>
        </button>
      </div>
      <img className="px-10 mx-auto" src={heroImg} alt="" />
    </div>
  );
};

export default Banner;
