import Image from "next/image";
import React from "react";
import { MainHeaderProps } from "./types";
import { H1 } from "../Typography/H1";
import { H3 } from "../Typography/H3";
import Link from "next/link";
export const MainHeader: React.FC<MainHeaderProps> = ({
  fullName,
  designation,
  company,
  companyUrl,
}) => {
  return (
    <div className="gap-5 flex md:flex-row flex-col items-center">
      <Image
        priority
        src="/images/zain.png"
        height={140}
        width={140}
        alt={fullName}
        className="rounded-[80px]"
      />
      <div className="text-center md:text-left">
        <H1>{fullName}</H1>
        <H3>
          {designation}
          <Link href={companyUrl} target="_blank" rel="noreferrer">
            <span className=" text-secondary dark:text-secondary-dark">{` @${company}`}</span>
          </Link>
        </H3>
      </div>
    </div>
  );
};
