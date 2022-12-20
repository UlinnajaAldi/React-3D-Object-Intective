import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

export const NavigationBar = () => {
  return (
    <div className="grid grid-cols-4 justify-items-stretch place-items-center mx-32 my-11">
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <div className="col-span-2 justify-self-center">
        <div className="flex gap-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text--active" : "text--noactive"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/introduce"
            className={({ isActive }) =>
              isActive ? "text--active" : "text--noactive"
            }
          >
            Pura Testing
          </NavLink>
          <NavLink
            to="/items-list"
            className={({ isActive }) =>
              isActive ? "text--active" : "text--noactive"
            }
          >
            Saklar
          </NavLink>
        </div>
      </div>

      <div className="justify-self-end">
        <div className="flex items-center gap-6">
          <Link to={"/sign-up"} className="button--landing">
            Sign up
          </Link>
          <Link to={"/log-in"} className="button--landing">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};
