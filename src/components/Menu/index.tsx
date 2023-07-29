"use client";
import React, { memo, useEffect, useRef, useState } from "react";
import { MenuProps } from "./types";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import { usePathname } from "next/navigation";
import { stylesSticky, stylesOpen } from "./styles";

const MenuComponent: React.FC<MenuProps> = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const onToggle = () => setOpen((current) => !current);

  const onClose = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  useEffect(() => {
    const onScroll = (e: any) => {
      const sticky = e.target.documentElement.scrollTop >= 70;
      setIsSticky(sticky);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="border-gray-200 pt-20">
      <div
        className={`container bg-background dark:bg-background-dark flex flex-wrap items-center justify-end pt-8 overflow-hidden transition-all absolute w-full top-0 left-0 right-0 px-8 lg:px-50 xl:px-72 md:px-30 md:px-20 ${
          isSticky && "stylesSticky"
        }`}
      >
        <nav>
          {" "}
          <div
            onClick={onToggle}
            className="cursor-pointer md:hidden block"
            aria-hidden="true"
          >
            <MenuIcon />
          </div>
          <ul
            id="menu"
            className={`flex-col md:flex-row md:flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium ${
              open ? stylesOpen : "hidden"
            }`}
          >
            {menu
              ?.filter((item) => !item.hide)
              ?.map((menuItem) => (
                <li key={menuItem.name}>
                  <Link
                    href={menuItem.page}
                    onClick={onClose}
                    legacyBehavior
                    className={` text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:text-black hover:bg-transparent border-0 block pl-3 pr-4 py-2 md:p-0 ${
                      menuItem.page === pathname && "dark:text-gray-100"
                    }`}
                  >
                    {menuItem.name}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export const Menu = memo(MenuComponent);
