import React from "react";
import WatchModal from "../Components/WatchModal";

function Home() {
  return (
    <>
      <div className="home-row-1 bg-[#F8F8F8] text-center pt-14 pb-44 relative z-[2] shadow-md">
        <p className="text-sm font-poppins">Explore Awesome Products</p>
        <p className="font-semibold text-[25px] uppercase">
          Recommended For You
        </p>
      </div>
      <div className="home-row-2 bg-white px-28 pb-[70px] shadow-2xl">
        <WatchModal />
        <div className="text-center mt-16">
          <a
            href="#"
            className="inline-block border border-1 border-[#707070] py-4 px-7 rounded-md hover:text-white hover:bg-[#ff4f04] hover:border-[#ff4f04]"
          >
            Explore Other Products
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
