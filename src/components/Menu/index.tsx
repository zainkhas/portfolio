"use client";
import React, { memo, useEffect, useState } from "react";
import { MenuProps } from "./types";
import MenuIcon from "./MenuIcon";
import { usePathname } from "next/navigation";
import { Box, Stack } from "@/components";
import { MenuLink } from "./Menu.styled";
import Link from "next/link";
import { menuCloseStyles, menuOpenStyles } from "./styles";

const MenuComponent: React.FC<MenuProps> = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const onToggle = () => setOpen((current) => !current);

  const onClose = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflowY = open ? "hidden" : "scoll";
  }, [open]);

  return (
    <Box component="nav">
      <Stack
        flexWrap="wrap"
        alignItems="flex-end"
        justifyContent="flex-end"
        mt={4}
      >
        <Box onClick={onToggle} aria-hidden="true" display={{ md: "none" }}>
          <MenuIcon />
        </Box>
        <Stack
          component="ul"
          id="menu"
          sx={open ? menuOpenStyles : menuCloseStyles}
        >
          {menu
            ?.filter((item) => !item.hide)
            ?.map((menuItem) => (
              <Stack component="li" key={menuItem.name} alignItems={"flex-end"}>
                <Link href={menuItem.page} legacyBehavior>
                  <MenuLink
                    onClick={onClose}
                    isActive={menuItem.page === pathname}
                  >
                    {menuItem.name}
                  </MenuLink>
                </Link>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export const Menu = memo(MenuComponent);
