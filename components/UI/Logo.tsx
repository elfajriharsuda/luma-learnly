import React from "react";
import Image from "next/image";
import logo from "../../public/images/illustration/student/128/white.svg";
import Link from "next/link";
const Logo = () => {
  return (
    <div className="logo flex">
      <Link href="/" className="flex items-center text-3xl	">
        <div className="avatar-title bg-[#5567ff] rounded	p-1">
          <Image src={logo} alt="logo image" width={40} height={40}></Image>
        </div>
        <div className=" p-1 font-bold 	">Luma</div>
      </Link>
    </div>
  );
};

export default Logo;
