"use client";
import React, { memo, useEffect, useState } from "react";
import { MenuProps } from "./types";
import Link from "next/link";
import MenuIcon from "./MenuIcon";
import { usePathname } from "next/navigation";

const MenuComponent: React.FC<MenuProps> = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const onToggle = () => setOpen((current) => !current);

  const onClose = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const stylesOpen =
    "flex flex-1 fixed right-0 top-[50px] bg-resumePaper dark:bg-resumePaper-dark w-full h-full py-8 px-6";

  return (
    <nav className="border-gray-200">
      <div className="container mx-auto flex flex-wrap items-center justify-end mt-8">
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
      </div>
    </nav>
  );
};

export const Menu = memo(MenuComponent);
