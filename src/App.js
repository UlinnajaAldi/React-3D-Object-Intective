import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { LandingPage } from "./pages/LandingPage";
import { ItemsPage } from "./pages/ItemsPage";
import { Introduce } from "./pages/Introduce";

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
