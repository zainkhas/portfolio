import React from "react";
import { MainHeaderProps } from "./types";
import { H3 } from "../Typography/H3";
import Link from "next/link";
import { MAIN_IMAGE_PATH } from "@/common/metaData";
import { Stack, Box, Typography } from "@/components";
import { Avatar } from "./Avatar";

export const MainHeader: React.FC<MainHeaderProps> = ({
  fullName,
  designation,
  company,
  companyUrl,
}) => {
  return (
    <Stack flexDirection={{ md: "row" }} alignItems="center" gap={3}>
      <Avatar
        priority
        src={MAIN_IMAGE_PATH}
        height={140}
        width={140}
        alt={fullName}
      />
      <Box textAlign={{ xs: "center", md: "left" }}>
        <Typography component="h1" variant="h1" color="title">
          {fullName}
        </Typography>
        <H3>
          {designation}
          <Link
            href={companyUrl}
            target="_blank"
            rel="noreferrer"
            className=" text-secondary dark:text-secondary-dark"
          >
            {` @${company}`}
          </Link>
        </H3>
      </Box>
    </Stack>
  );
};
