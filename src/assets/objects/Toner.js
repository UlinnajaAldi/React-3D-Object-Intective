import React, { Suspense } from "react";
import { Loading } from "../../components/loading/Loading";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Spline scene="https://prod.spline.design/M4U6iHHuCfTMVjsh/scene.splinecode" />
      </Suspense>
    </div>
  );
}
