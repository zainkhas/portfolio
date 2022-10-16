import Image from "next/image";
import React from "react";
const IconButton = ({ url, icon, name }) => {
  return (
    <a
      className="ml-2"
      href={url}
      key={name}
      title={name}
      target="_blank"
      rel="noreferrer"
    >
      <Image src={`/svg/${icon}`} alt={name} height={30} width={30} />
    </a>
  );
};

export default IconButton;
