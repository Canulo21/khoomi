import React from "react";
import logo from "../Assets/images/logo.png";

function SiteBranding() {
  return (
    <>
      <div className="logo-holder">
        <a href="#">
          <img src={logo} alt="Khoomi" />
        </a>
      </div>
    </>
  );
}

export default SiteBranding;
