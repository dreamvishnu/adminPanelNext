import {
  RecoilEnv,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { Suspense, lazy, useEffect, useState, useCallback } from "react";
import { withRouter } from "next/router";

const Footer = lazy(() => import("./footer"));
const Header = lazy(() => import("./header"));
const UserHeader = lazy(() => import("./userHeader"));
const Sidebar = lazy(() => import("./sidebar"));
const OrganiserSidebar = lazy(() => import("./userSidebar/sidebar"));

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
import { useUser } from "../context/UserContext";

const Layout = ({ children, router }: any) => {
  const theme = useRecoilValue(themesSetting);
  const screen = useRecoilValue(screenSize);
  const [valueHideSidebar, setHideSidebar] = useRecoilState(toggleSidebarMenu);
  const setSizeValue = useSetRecoilState(screenSize);
  const { user } = useUser();
  const windowSize = useWindowSize();
  const setTheme = useSetRecoilState(themesSetting);
  const [loading, setLoading] = useState(true);

  const handleToggleMenuSidebar = () => {
    setHideSidebar({
      menuSidebarCollapsed: !valueHideSidebar.menuSidebarCollapsed,
    });
  };

  const manageAdminSidebar = useCallback(() => {
    if (valueHideSidebar.menuSidebarCollapsed && screen.screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (valueHideSidebar.menuSidebarCollapsed && screen.screenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!valueHideSidebar.menuSidebarCollapsed && screen.screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }, [valueHideSidebar.menuSidebarCollapsed, screen.screenSize]);

  const manageOrganiserSidebar = useCallback(() => {
    if (valueHideSidebar.menuSidebarCollapsed && screen.screenSize === "lg") {
      addWindowClass("sidebar-collapse");
    } else if (valueHideSidebar.menuSidebarCollapsed && screen.screenSize === "xs") {
      addWindowClass("sidebar-open");
    } else if (!valueHideSidebar.menuSidebarCollapsed && screen.screenSize !== "lg") {
      addWindowClass("sidebar-closed");
      addWindowClass("sidebar-collapse");
    }
  }, [valueHideSidebar.menuSidebarCollapsed, screen.screenSize]);

  useEffect(() => {
    const { pathname } = router;

    console.log("Current Pathname:", pathname);
    console.log("User Data from Context:", user);

    // Redirect logic based on authentication and roles
    if (!user?.token) {
      if (pathname.startsWith("/admin")) {
        router.push("/admin");
      } else if (pathname.startsWith("/user")) {
        router.push("/userlogin");
      }
    } else if (pathname.startsWith("/admin") && user.role !== "admin") {
      router.push("/admin");
    } else if (pathname.startsWith("/user") && user.role !== "organiser") {
      router.push("/userlogin");
    }

    const size = calculateWindowSize(windowSize.width);
    if (screen.screenSize !== size) {
      setSizeValue({ screenSize: size });
    }

    // Sidebar Management Based on Role
    if (user?.role === "admin") {
      manageAdminSidebar();
    } else if (user?.role === "organiser") {
      manageOrganiserSidebar();
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      removeWindowClass("sidebar-closed");
      removeWindowClass("sidebar-collapse");
      removeWindowClass("sidebar-open");
    };
  }, [
    router,
    user,
    windowSize,
    screen.screenSize,
    valueHideSidebar,
    setSizeValue,
    manageAdminSidebar,
    manageOrganiserSidebar,
  ]);

  RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

  const renderHeader = () => {
    if (user?.role === "admin") {
      return <Header />;
    } else if (user?.role === "organiser") {
      return <UserHeader />;
    }
    return null;
  };

  const renderSidebar = () => {
    if (user?.role === "admin") {
      return <Sidebar />;
    } else if (user?.role === "organiser") {
      return <OrganiserSidebar />;
    }
    return null;
  };

  return (
    <Suspense fallback={<LoadingApp />}>
      <div className="wrapper">
        {theme.header && renderHeader()}
        {theme.sidebar && renderSidebar()}
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
