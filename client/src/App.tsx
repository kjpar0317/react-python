import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "jotai";
import { useAtomsDebugValue } from "jotai/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";

import CustomRoutes from "@route/CustomRoutes";
import { Loading } from "@component/layout/common/index";

const DebugAtoms = () => {
  useAtomsDebugValue();
  return null;
};

const queryClient = new QueryClient();

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <QueryClientProvider client={queryClient}>
          <Provider>
            <DebugAtoms />
            <CustomRoutes />
          </Provider>
        </QueryClientProvider>
      </Suspense>
      <ToastContainer />
    </BrowserRouter>
  );
}
