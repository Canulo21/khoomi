import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function HeaderSearchBar() {
  return (
    <>
      <div className="search-wrap">
        <div className="relative">
          <input
            className="search text-sm border border-[#DFDFDF] border-solid lg:w-[557px] py-2 px-5 h-[48px] rounded-md "
            placeholder="Search For Products, Brands & Categories"
          />
          <SearchOutlinedIcon className="absolute right-3 inset-y-0 m-auto text-[#200E32]" />
        </div>
      </div>
    </>
  );
}

export default HeaderSearchBar;
