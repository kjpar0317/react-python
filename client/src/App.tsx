import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

import CustomRoutes from "@route/CustomRoutes";
import { Loading } from "@component/layout/common/index";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <CustomRoutes />
      </Suspense>
    </BrowserRouter>
  );
}
