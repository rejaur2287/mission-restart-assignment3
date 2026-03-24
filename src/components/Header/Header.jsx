import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import gitHubIcon from "../../assets/gitHubIcon.png";
import "./Header.css";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <NavLink className="mr-3" to="/">
                Home
              </NavLink>
              <NavLink className="mr-3" to="/apps">
                Apps
              </NavLink>
              <NavLink className="mr-3" to="/installation">
                Installation
              </NavLink>
            </ul>
          </div>
          <Link className="flex items-center">
            <img src={logo} alt="Company-Logo" width={40} height={40} />
            <span className="text-[#8a2be2] text-sm">HERO.IO</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink className="mr-3" to="/">
              Home
            </NavLink>
            <NavLink className="mr-3" to="/apps">
              Apps
            </NavLink>
            <NavLink className="mr-3" to="/installation">
              Installation
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn btn-primary">
            <img src={gitHubIcon} alt="Git Hub Icon" />
            Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
