import {
  RecoilEnv,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";

const Footer = lazy(() => import("./footer"));
const Header = lazy(() => import("./header"));
const UserHeader = lazy(() => import("./userHeader"));
const Sidebar = lazy(() => import("./sidebar"));

import { themesSetting } from "@/recoil";
import { screenSize, toggleSidebarMenu } from "../utils";
import {
  LoadingApp,
  addWindowClass,
  calculateWindowSize,
  getItem,
  removeWindowClass,
  useWindowSize,
} from "../utils/function";
import { Suspense, lazy, useEffect, useState } from "react";
import { withRouter } from "next/router";

const Layout = ({ children, router }: any) => {
  const theme = useRecoilValue(themesSetting);
  const screen = useRecoilValue(screenSize);
  const sidebar = useRecoilValue(toggleSidebarMenu);
  const setSizeValue = useSetRecoilState(screenSize);
  const [valueHideSidebar, setHideSidebar] = useRecoilState(toggleSidebarMenu);

  const handleToggleMenuSidebar = () => {
    setHideSidebar({
      menuSidebarCollapsed: !valueHideSidebar.menuSidebarCollapsed,
    });
  };

  const windowSize = useWindowSize();
  const setTheme = useSetRecoilState(themesSetting);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const { pathname } = router;

    // Log the current pathname for debugging
    console.log("Current Pathname:", pathname);

    const userData = getItem("userdata"); // Assuming this fetches user data
    console.log("User Data:", userData);
    if (!userData?.token) {
      // Redirect based on pathname
      if (pathname.startsWith("/admin")) {
        console.log("Redirecting to /admin login");
        router.push("/admin"); // Redirect to admin login
      } else if (pathname.startsWith("/user")) {
        console.log("Redirecting to /login (organiser login)");
        router.push("/userlogin");
      }
    }else if (pathname.startsWith("/admin") && userData.token !== 12341210) {
      // Prevent non-admin users from accessing admin pages
      router.push("/admin");
    } else if (pathname.startsWith("/userlogin") && userData.token !== 12341212) {
      // Prevent non-organisers from accessing user dashboard
      router.push("/userlogin");
    }
    removeWindowClass("sidebar-closed");
    removeWindowClass("sidebar-collapse");
    removeWindowClass("sidebar-open");

    const size = calculateWindowSize(windowSize.width);
    if (screen.screenSize !== size) {
      setSizeValue({ screenSize: size });
    }

    if (sidebar.menuSidebarCollapsed && screen.screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (sidebar.menuSidebarCollapsed && screen.screenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!sidebar.menuSidebarCollapsed && screen.screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }

    setTimeout(() => {
      setloading(false);
    }, 1000);
  }, [windowSize, sidebar, setTheme, screen.screenSize, setSizeValue, router]);

  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

  const renderHeader = () => {
    const { pathname } = router;

    if (pathname.startsWith("/adminDashboard")) {
      return <Header />; // Default header for /dashboard
    } else if (pathname.startsWith("/userDashboard")) {
      return <UserHeader />; // User-specific header for /userDashboard
    }
    return null; // No header for other paths
  };

  return (
    <Suspense fallback={<LoadingApp />}>
      <div className="wrapper">
        {theme.header && renderHeader()}
        {theme.sidebar && <Sidebar />}
        {theme.content && children}
        {theme.footer && <Footer />}

        <div
          id="sidebar-overlay"
          role="presentation"
          onClick={handleToggleMenuSidebar}
          onKeyDown={() => {}}
        />
      </div>
      {loading && <LoadingApp />}
    </Suspense>
  );
};

export default withRouter(Layout);
