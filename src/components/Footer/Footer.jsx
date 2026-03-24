import React from "react";
import logo from "../../assets/logo.png";
import SocialFB from "../../assets/SocialFB.png";
import SocialIn from "../../assets/SocialIn.png";
import SocialX from "../../assets/SocialX.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-[#001931] py-10 px-2">
      <div className="flex w-11/12 mx-auto p-2 justify-between">
        <div>
          <Link className="flex items-center">
            <img src={logo} alt="Company-Logo" width={40} height={40} />
            <span className="text-[#8a2be2] text-sm">HERO.IO</span>
          </Link>
        </div>
        <div>
          <h2>Social Links</h2>
          <div className="flex justify-between py-3">
            <img src={SocialX} alt="" />
            <img src={SocialIn} alt="" />
            <img src={SocialFB} alt="" />
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto p-2">
        <hr />
        <p className="text-center py-4">
          Copyright © 2025 - All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
