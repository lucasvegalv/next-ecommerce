import React from "react";
import Link from "next/link";
import Logo from "@/app/components/Logo";
import {
  IoMenu,
  IoHeartOutline,
  IoCartOutline,
  IoPersonOutline,
} from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="py-5 px-5 flex justify-between items-center">
      <Logo />

      <Link href="/">
        <IoMenu className="sm:hidden" size={20} />
      </Link>

      {/** */}
      <div className="hidden sm:flex sm:justify-between gap-4">
        <Link href="/">
          <IoHeartOutline className="" size={20} />
        </Link>
        <Link href="/">
          <IoCartOutline className="" size={20} />
        </Link>
        <Link href="/">
          <IoPersonOutline className="" size={20} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
