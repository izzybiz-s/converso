import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer"></div>
        <Image width={46} height={44} src="/images/logo.svg" alt="logo"></Image>
      </Link>
      <div className="flex-itemx-center gap-8"></div>
      <NavItems />
      <p>Sign In</p>
    </nav>
  );
};

export default Navbar;
