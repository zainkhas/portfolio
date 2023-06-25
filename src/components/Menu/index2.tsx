import React from "react";
import Script from "next/script";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import MenuIcon2 from "./MenuIcon2";
import { MenuProps } from "./types";

export const Menu: React.FC<MenuProps> = ({ menu }) => {
  return (
    <>
      <nav className="border-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between mt-8">
          <Link href="#" className="flex"></Link>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            className="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-lg inline-flex items-center justify-center"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon />
            <MenuIcon2 />
          </button>
          <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              {menu
                ?.filter((item) => !item.hide)
                ?.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.page}
                      className="text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 hover:text-black hover:bg-transparent border-0 block pl-3 pr-4 py-2 md:p-0"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </nav>
      <Script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js" />
    </>
  );
};
