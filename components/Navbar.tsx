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
    label: "Contact Us",
    page: "contact",
  },
];

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <header className="w-full mx-auto pr-4 fixed top-0 z-50 shadow bg-white dark:border-b dark:border-stone-600">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <div className="flex items-center p-0">
              <Image src="/logo.jpg" alt="" width={200} height={200} priority />
            </div>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center mt-3 mb-2 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="items-center font-jakata text-lg rounded-md font-bold justify-center space-y-4 md:flex md:space-x-12 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      "block lg:inline-block"
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
