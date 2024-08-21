import React from "react";
import footerLogo from "../Assets/images/logo.png";
import MenuList from "./MenuList";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="flex flex-wrap md:px-14 lg:px-20  lg:pt-16  lg:pb-24">
          <div className="footer-1">
            <img src={footerLogo} alt="Khoomi" />
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </p>
            </div>
          </div>
          <div className="footer-2">
            <ul>
              <MenuList />
            </ul>
          </div>
          <div className="footer-3">
            <div>
              <ul>
                <li>
                  <a href="#">Legals</a>
                </li>
                <li>
                  <a href="#">License</a>
                </li>
                <li>
                  <a href="#">Refund Policy</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-4">
            <div>
              <a href="#">Contacts</a>
              <p className="pt-[10px]">
                Fell free get in touch with us via phone or send us a message
              </p>
              <div className="flex flex-col mt-[15px]">
                <a href="tel:+" className="mt-[10px]">
                  +1 234 567 89 10
                </a>
                <a href="mailto:" className="mt-[10px]">
                  support@khoomi.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
