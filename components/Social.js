import Image from "next/image";
import React from "react";
const Social = ({ links }) => {
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

export default Social;
