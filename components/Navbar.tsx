"use client"; // this is a client component
import { useState } from "react";
import { Link } from "react-scroll/modules";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Image from "next/image";

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    page: "home",
  },
  {
    label: "Services",
    page: "services",
  },
  {
    label: "Gallery",
    page: "gallery",
  },
  {
    label: "Contact",
    page: "contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto px-4 fixed top-0 z-50 shadow bg-white dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center ">
            <Image src="/logo.jpg" alt="" width={200} height={200} />
          </div>
        </div>
        <div className="items-center font-jakata text-lg rounded-md font-bold justify-center space-y-12 md:flex md:space-x-12 md:space-y-0">
          {NAV_ITEMS.map((item, idx) => {
            return <a key={idx}>{item.label}</a>;
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
