"use client";
import { FC, useMemo } from "react";
import { MenuProps } from "./types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu: FC<MenuProps> = ({ menu }) => {
  const pathname = usePathname();

  const menuItems = useMemo(
    () =>
      menu
        .filter((item) => !item.hide)
        .map((menuItem) => (
          <li key={menuItem.name}>
            <Link
              href={menuItem.page}
              className={
                menuItem.page === pathname
                  ? "btn-primary normal-case text-normal"
                  : ""
              }
            >
              {menuItem.name}
            </Link>
          </li>
        )),
    [menu, pathname]
  );

  return (
    <div className="navbar bg-base-100 ">
      <div className="navbar">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex mr-20">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
};
