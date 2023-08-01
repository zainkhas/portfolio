import React from "react";
import Image from "next/image";
import { SocialLinksProps } from "./types";
import { Stack } from "@/components";

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1} my={3}>
      {links.map((link) => (
        <a
          href={link.url}
          key={link.name}
          title={link.name}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={`/svg/${link.icon}`}
            alt={link.name}
            height={32}
            width={32}
          />
        </a>
      ))}
    </Stack>
  );
};
