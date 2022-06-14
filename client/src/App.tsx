import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "jotai";
import { useAtomsDebugValue } from "jotai/devtools";

import CustomRoutes from "@route/CustomRoutes";
import { Loading } from "@component/layout/common/index";

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Provider>
          <DebugAtoms />
          <CustomRoutes />
        </Provider>
      </Suspense>
    </BrowserRouter>
  );
}
