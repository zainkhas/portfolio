import React from "react";
import Image from "next/image";
import { SocialLinksProps } from "./types";

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex items-center my-5">
      {links.map((link) => (
        <a
          className="ml-2"
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
    </div>
  );
};
