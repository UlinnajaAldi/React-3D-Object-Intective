import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
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
      <NavigationBar />
      <Routes>
        {paths.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </Routes>
    </>
  );
};
