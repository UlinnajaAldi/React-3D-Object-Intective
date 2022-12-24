import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.svg";

export const Navbar = () => {
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
            to="/items-list"
            className={({ isActive }) =>
              isActive ? "text--active" : "text--noactive"
            }
          >
            List Items
          </NavLink>
          <NavLink
            to="/introduce"
            className={({ isActive }) =>
              isActive ? "text--active" : "text--noactive"
            }
          >
            How To Use
          </NavLink>
        </div>
      </div>

      <div className="justify-self-end">
        <a
          href="https://github.com/ulinnajaaldi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-secondary"
        >
          <h3 className="font-semibold text-lg">Ulinnaja Aldi</h3>
          <div className="flex items-center">
            <img
              src="https://i.ibb.co/6yNLmjS/1671129790285-1.jpg"
              alt="Foto profil John Doe"
              className="w-10 h-10 rounded-full"
            />
          </div>
          {/* <Link to={"/sign-up"} className="button--landing">
            Sign up
          </Link>
          <Link to={"/log-in"} className="button--landing">
            Log in
          </Link> */}
        </a>
      </div>
    </div>
  );
};
