import React from "react";
import { MainHeaderProps } from "./types";
import Link from "next/link";
import { MAIN_IMAGE_PATH } from "@/common/metaData";
import { Stack, Typography } from "@/components";
import { Avatar } from "./Avatar";

export const MainHeader: React.FC<MainHeaderProps> = ({
  fullName,
  designation,
  company,
  companyUrl,
}) => {
  return (
    <Stack flexDirection={{ md: "row" }} alignItems="center" gap={2}>
      <Avatar
        priority
        src={MAIN_IMAGE_PATH}
        height={125}
        width={125}
        alt={fullName}
      />
      <Stack textAlign={{ xs: "center", md: "left" }} gap={1}>
        <Typography component="h1" variant="h1" color="title">
          {fullName}
        </Typography>
        <Typography component="h3" variant="h3" color="title">
          {designation}
          <Link href={companyUrl} target="_blank" rel="noreferrer">
            {` @${company}`}
          </Link>
        </Typography>
      </Stack>
    </Stack>
  );
};
