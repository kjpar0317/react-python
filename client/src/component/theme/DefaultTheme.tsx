import { useLocation, Navigate, RouteProps } from "react-router-dom";
import { useAtomValue } from "jotai";

import { fetchToken } from "@util/comm-util";
import { themeStore } from "@store/index";
import { Header, Sidebar, Footer } from "@component/layout/common/index";

export interface DefaultThemeProps extends RouteProps {}

export function DefaultTheme(props: DefaultThemeProps) {
  const { children } = props;
  const theme = useAtomValue<string>(themeStore);
  let auth = fetchToken();
  let location = useLocation();

  if (auth) {
    return (
      <div data-theme={theme}>
        <Header />
        <Sidebar />
        <div
          id="main-content"
          className="relative h-full overflow-y-auto w-fit bg-base-100 text-base-content lg:ml-64"
        >
          <main className="my-20">{children}</main>
          <Footer />
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}
