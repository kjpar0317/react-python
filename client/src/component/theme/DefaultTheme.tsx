import { useLocation, Navigate, RouteProps } from "react-router-dom";

import { fetchToken } from "@util/comm-util";
import { Header, Sidebar, Footer } from "@component/layout/common/index";

export interface DefaultThemeProps extends RouteProps {}

export function DefaultTheme(props: DefaultThemeProps) {
  const { children } = props;
  let auth = fetchToken();
  let location = useLocation();

  if (!auth) {
    return (
      <>
        <Header />
        <Sidebar />
        <div
          id="main-content"
          className="relative h-full overflow-y-auto w-fit bg-gray-50 lg:ml-64"
        >
          <main className="my-20">{children}</main>
          <Footer />
        </div>
      </>
    );
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}
