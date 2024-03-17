import React, { Suspense, lazy } from "react";
import Header from "./Header";
import LoadingFallback from "./LoadingFallback";
const MockupConstructor = lazy(() => import("./MockupConstructor"));

export default function MockupConstructorPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<LoadingFallback />}>
        <MockupConstructor />
      </Suspense>
    </>
  );
}
