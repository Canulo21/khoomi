import React from "react";
import banner from "../Assets/images/banner.png";
import iphoneImg from "../Assets/images/banner-1.png";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function HeroBanner() {
  return (
    <>
      <div className="hero-wrap lg:h-[596px] w-full">
        <div
          className="hero-container h-full overflow-hidden"
          style={{
            background: `url(${banner}) no-repeat center center / cover`,
          }}
        >
          <div className="hero-text-wrap flex flex-col justify-center ml-28 h-full">
            <p className="font-poppins uppercase font-semibold lg:text-[54px] md:text-[40px] text-white leading-[72px] mb-5">
              GET THE NEW IPHONE 12<br></br> PRO
            </p>
            <p className="text-white font-heebo leading-8">
              A transformative triple‑camera system that adds tons of capability
              without
              <br></br>
              complexity
            </p>
            <div className="hero-btn flex gap-5 mt-8">
              <button className="font-heebo text-white font-medium bg-[#FF4F04] hover:bg-[rgba(255,255,255,0.15)] transition duration-300 ease-in-out py-[13px] px-[19px] flex items-center gap-3 rounded-md">
                Buy Now
                <ShoppingBasketIcon />
              </button>
              <button className="font-heebo text-white font-medium bg-[rgba(255,255,255,0.15)] hover:bg-[#FF4F04] transition duration-300 ease-in-out py-[13px] px-[19px] rounded-md">
                With $599 with trade-in
              </button>
            </div>
          </div>
          <div className="iphone-img absolute top-0 right-0">
            <img src={iphoneImg} alt="iPhone" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
