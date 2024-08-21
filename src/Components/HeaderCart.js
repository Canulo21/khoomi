import { useState, useEffect } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function HeaderCart() {
  const [favorite, setFavorite] = useState(0);
  const [cart, setCart] = useState(0);

  return (
    <>
      <div className="cart-holder w-[60%] flex justify-end">
        <div className="flex gap-5">
          <div className="relative">
            <a href="#">
              <FavoriteBorderOutlinedIcon />
            </a>
            <div className="item absolute bg-[#E81D1D] text-white text-[10px] w-[15px] h-[15px] top-[-5px] right-[-5px] text-center rounded-full">
              {favorite}
            </div>
          </div>

          <a href="#">
            <PersonOutlineOutlinedIcon />
          </a>
          <div className="relative">
            <a href="#">
              <ShoppingCartOutlinedIcon />
            </a>
            <div className="item absolute bg-[#E81D1D] text-white text-[10px] w-[15px] h-[15px] top-[-5px] right-[-5px] text-center rounded-full">
              {cart}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderCart;
