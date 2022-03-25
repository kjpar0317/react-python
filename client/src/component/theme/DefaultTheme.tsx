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
        <main>
          <div
            id="main-content"
            className="relative h-full w-full overflow-y-auto border-base-300 bg-base-200 pt-20 text-base-content lg:ml-64 lg:w-[calc(100%-16rem)]"
          >
            {children}
          </div>
          <Footer />
        </main>
      </div>
    );
  } else {
    return <Navigate to="/login" state={{ from: location }} />;
  }
}
