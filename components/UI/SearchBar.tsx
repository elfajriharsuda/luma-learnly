import React from "react";
import search from "../../public/images/icon/UI/search.svg";
import Image from "next/image";
const SearchBar = () => {
  return (
    <form className="search-form bg-white rounded-2xl gap-5 p-2">
      <button className="btn ">
        <Image src={search} alt="search" width={15} height={15}></Image>
      </button>
      <input type="text" className="p-1 border-none" placeholder="Search..." />
    </form>
  );
};

export default SearchBar;
