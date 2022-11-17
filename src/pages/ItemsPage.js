import React from "react";
import { NavigationBar } from "../components/NavigationBar";
import Switch from "../components/Switch";

export const ItemsPage = () => {
  return (
    <>
      <NavigationBar />
      <div className="h-[80vh]">
        <Switch />
      </div>
    </>
  );
};
