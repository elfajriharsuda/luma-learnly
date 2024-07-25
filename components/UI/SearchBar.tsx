import React from "react";
import search from "../../public/images/icon/UI/search.svg";
import Image from "next/image";
const SearchBar = () => {
  return (
    <form className="search-form bg-neutral-100 rounded-2xl p-2 mx-5">
      <button className="btn mx-2">
        <Image src={search} alt="search" width={15} height={15}></Image>
      </button>
      <input
        type="text"
        className="p-1 border-none bg-transparent outline-none	"
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBar;
