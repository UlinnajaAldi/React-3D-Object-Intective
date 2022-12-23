import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navigation-bar/navbar-component";
import { LandingPage } from "./pages/LandingPage";
import { ItemsPage } from "./pages/ItemsPage";
import { Introduce } from "./pages/Introduce";
import { UnderContruction } from "./pages/UnderContruction";

export const App = () => {
  const paths = [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/items-list",
      element: <ItemsPage />,
    },
    {
      path: "/introduce",
      element: <Introduce />,
    },
    {
      path: "/*",
      element: <UnderContruction />,
    },
  ];

  return (
    <>
      <Navbar />
      <Routes>
        {paths.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </Routes>
    </>
  );
};
