import React from "react";
import SiteBranding from "./SiteBranding";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderCart from "./HeaderCart";
import NavBar from "./NavBar";
import Hamburger from "./Hamburger";

function Header() {
  return (
    <>
      <div className="header-top border-b border-[#DFDFDF]">
        <div className="md:px-14 lg:px-20  py-7 flex items-center">
          <div className="site-branding w-[17%]">
            <SiteBranding />
          </div>
          <HeaderSearchBar />
          <HeaderCart />
        </div>
      </div>
      <div className="header-right">
        <div className="md:px-14 lg:px-20 pt-6">
          <NavBar />
          <Hamburger />
        </div>
      </div>
    </>
  );
}

export default Header;
