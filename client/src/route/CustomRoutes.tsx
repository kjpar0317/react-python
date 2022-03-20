import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { DefaultTheme } from "@component/theme/DefaultTheme";
import LoginPage from "@pages/login/LoginPage";
import ErrorPage from "@pages/error/ErrorPage";

const ARR_ROUTES = [
  {
    path: "/",
    realPath: "../pages/home/MainPage"
  },
  {
    path: "/about",
    realPath: "../pages/about/TestPage"
  }
];

export default function CustomRoutes() {
  function getLazyComponent(path: string) {
    const Component = lazy(() => import(/* @vite-ignore */ path));
    return <Component />;
  }
  return (
    <>
      <Routes>
        {ARR_ROUTES.map((r, index) => (
          <Route
            key={index}
            path={r.path}
            element={
              <DefaultTheme>{getLazyComponent(r.realPath)}</DefaultTheme>
            }
          />
        ))}
        <Route path={"/login"} element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
