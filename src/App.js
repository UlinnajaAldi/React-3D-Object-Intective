import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navigation-bar/navbar-component";
import { Loading } from "./components/loading/Loading";

const LandingPage = lazy(() => import("./pages/LandingPage"));
const ItemsPage = lazy(() => import("./pages/ItemsPage"));
const Introduce = lazy(() => import("./pages/Introduce"));
const UnderContruction = lazy(() => import("./pages/UnderContruction"));

export const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/*" element={<UnderContruction />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/items-list" element={<ItemsPage />} />
          <Route path="/introduce" element={<Introduce />} />
        </Routes>
      </Suspense>
    </>
  );
};
