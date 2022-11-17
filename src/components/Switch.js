import React, { Suspense } from "react";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  function onMouseDown(e) {
    if (e.target.name === "SwitchContainer") {
      console.log("I have been clicked!");
    }
  }
  return (
    <div className="h-[80vh]">
      <Suspense fallback={<div>Loading...</div>}>
        <Spline
          scene="https://prod.spline.design/yztI4YCsUMWjxWC4/scene.splinecode"
          onMouseDown={onMouseDown}
        />
      </Suspense>
    </div>
  );
}
