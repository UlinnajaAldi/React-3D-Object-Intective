import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navigation-bar/navbar-component";
import { Loading } from "./components/loading/Loading";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ItemsPage = lazy(() => import("./pages/ItemsPage"));
const Introduce = lazy(() => import("./pages/Introduce"));
const DetailPage = lazy(() => import("./pages/DetailPage"));
const UnderContruction = lazy(() => import("./pages/UnderContruction"));

export const App = (props) => {
  const routes = [
    { path: "/", element: <LandingPage /> },
    { path: "/items-list", element: <ItemsPage /> },
    { path: "/introduce", element: <Introduce /> },
    {
      path: "/detail/:id",
      element: <DetailPage />,
    },
    { path: "*", element: <UnderContruction /> },
  ];
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Suspense>
    </>
  );
};
