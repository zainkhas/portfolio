import React, { useMemo } from "react";
import { Stack, Typography } from "@/components";
import Image from "next/image";
import { ResumeHeadProps } from "./types";

const ResumeHead: React.FC<ResumeHeadProps> = ({
  fullName,
  tagLine,
  contact,
}) => {
  const contactLinks = useMemo(
    () =>
      contact.map((contactItem) => (
        <a
          key={contactItem.name}
          href={contactItem.url}
          title={contactItem.name}
          target="_blank"
          rel="noreferrer"
        >
          <Stack alignItems="center" gap={1} direction="row">
            <Image
              src={`/svg/${contactItem.icon}`}
              alt={contactItem.name}
              height={24}
              width={24}
            />
            {contactItem.name}
          </Stack>
        </a>
      )),
    [contact]
  );

  return (
    <Stack gap={2}>
      <Typography component="h1" variant="h1">
        {fullName}
      </Typography>
      <Typography component="h3" variant="h3">
        {tagLine}
      </Typography>

      <Stack gap={1} mt={2}>
        {contactLinks}
      </Stack>
    </Stack>
  );
};

export default ResumeHead;
