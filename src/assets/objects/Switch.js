import React, { Suspense } from "react";
import { Loading } from "../../components/loading/Loading";
const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function Switch() {
  return (
    <div className="h-[80vh]">
      <Suspense fallback={<Loading />}>
        <Spline scene="https://prod.spline.design/yztI4YCsUMWjxWC4/scene.splinecode" />
      </Suspense>
    </div>
  );
}
