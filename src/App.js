import React from "react";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { ItemsPage } from "./pages/ItemsPage";

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
  ];

  return (
    <>
      <Routes>
        {paths.map((item, index) => (
          <Route key={index} {...item} />
        ))}
      </Routes>
    </>
  );
};
