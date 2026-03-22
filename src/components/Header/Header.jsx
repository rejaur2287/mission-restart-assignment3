import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import gitHubIcon from "../../assets/gitHubIcon.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="flex justify-between items-center my-3 w-11/12 mx-auto ">
      <Link className="flex items-center">
        <img src={logo} alt="Company-Logo" width={40} height={40} />
        <p>HERO.IO</p>
      </Link>
      <nav>
        <NavLink className="mr-3" to="/">
          Home
        </NavLink>
        <NavLink className="mr-3" to="/apps">
          Apps
        </NavLink>
        <NavLink className="mr-3" to="/installation">
          Installation
        </NavLink>
      </nav>
      <Link to={"https://github.com/rejaur2287"}>
        <button className="btn btn-primary">
          <img src={gitHubIcon} alt="Git Hub Icon" />
          Contribute
        </button>
      </Link>
    </div>
  );
};

export default Header;
