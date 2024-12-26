import React from "react";
import menu from "./sidebar/menu";
import SidebarNavList from "./sidebar/SidebarNavList";

const Sidebar = () => {
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4 custom-sidebar">
      {/* Brand Section */}
      <div className="brand-link text-center">
        <span className="brand-text font-weight-light text-center">
          <i className="fas fa-crown mr-2"></i> Convene
        </span>
      </div>
      
      {/* Navigation Menu */}
      <div className="sidebar">
        <nav className="mt-2">
          <ul
            className="nav nav-pills nav-sidebar flex-column modern-sidebar-menu"
            data-widget="treeview"
            data-accordion="true"
          >
            {menu.map((menu, index) => (
              <SidebarNavList data={menu} key={index} />
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
