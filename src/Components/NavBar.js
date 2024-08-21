import React from "react";
import MenuList from "./MenuList";

function NavBar() {
  return (
    <>
      <div className="header-nav-wrap">
        <nav id="site-nav">
          <ul id="primary-menu" className="flex justify-end">
            <MenuList />
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
