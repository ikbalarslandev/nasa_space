"use client";

import { Twirl as Hamburger } from "hamburger-react";
import Image from "next/image";

const HeaderMain = () => {
  return (
    <header className=" text-white h-14 flex items-center justify-end px-4 ">
      <Image
        src="/logo2.png"
        alt="logo"
        width={50}
        height={50}
        className="absolute top-1 left-3"
      />
      <Hamburger />
    </header>
  );
};

export default HeaderMain;
