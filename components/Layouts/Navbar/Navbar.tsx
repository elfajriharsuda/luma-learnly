import React from "react";
import Link from "next/link";
import Logo from "@/components/UI/Logo";
const Navbar = () => {
  return (
    <div className="bg-red-400 flex ">
      <nav className="flex items-center gap-1">
        <Logo />
        <div className="">
          <Link href="/">Home</Link>
        </div>
        <div className="dropdown-toggle">
          Courses
          <div className="dropdown-menu">
            <Link href="/course">Search Courses</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
