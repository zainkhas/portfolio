import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IconButtonProps } from "./types";

export const IconButton: React.FC<IconButtonProps> = ({
  url,
  icon,
  name,
  width = 30,
  height = 30,
}) => {
  return (
    <Link href={url} key={name} title={name} target="_blank" rel="noreferrer">
      <Image src={`/svg/${icon}`} alt={name} height={height} width={width} />
    </Link>
  );
};
