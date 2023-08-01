"use client";
import React, { memo, useEffect, useState } from "react";
import { MenuProps } from "./types";
import MenuIcon from "./MenuIcon";
import { usePathname } from "next/navigation";
import { Box, Stack } from "@/components";
import { MenuLink } from "./Menu.styled";
import Link from "next/link";

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
          mt={0}
          mb={0}
          pl={0}
          flexDirection={{ md: "row" }}
          gap={4}
        >
          {menu
            ?.filter((item) => !item.hide)
            ?.map((menuItem) => (
              <Box component="li" display="block" key={menuItem.name}>
                <Link href={menuItem.page} onClick={onClose} legacyBehavior>
                  <MenuLink isActive={menuItem.page === pathname}>
                    {menuItem.name}
                  </MenuLink>
                </Link>
              </Box>
            ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export const Menu = memo(MenuComponent);
