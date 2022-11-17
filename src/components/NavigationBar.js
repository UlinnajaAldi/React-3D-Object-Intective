import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";

export const NavigationBar = () => {
  return (
    <div className="grid grid-cols-4 justify-items-stretch place-items-center mx-32 my-11">
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <div className="col-span-2 justify-self-center">
        <div className="flex gap-12">
          <Link to={"/"} className="text--active">
            About
          </Link>
          <Link to={"/"} className="text--noactive">
            How it Works
          </Link>
          <Link to={"/items-list"} className="text--noactive">
            Interactive Items
          </Link>
        </div>
      </div>

      <div className="justify-self-end">
        <div className="flex items-center gap-6">
          <button className="button--landing">Sign up</button>
          <button className="button--landing">Log in</button>
        </div>
      </div>
    </div>
  );
};
