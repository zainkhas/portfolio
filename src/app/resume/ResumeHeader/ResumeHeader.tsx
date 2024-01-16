import { FC } from "react";
import Image from "next/image";
import { H1 } from "@/components/Typography/H1";
import { ResumeHeaderProps } from "./types";

const ResumeHeader: FC<ResumeHeaderProps> = ({
  fullName,
  tagline,
  contacts,
}) => (
  <div className="flex flex-col gap-4">
    <H1 className="md:leading-4">{fullName}</H1>
    <h3 className="text-secondary dark:text-secondary-dark text-lg">
      {tagline}
    </h3>

    <div className="flex flex-col gap-2">
      {contacts.map((contactItem) => (
        <a
          key={contactItem.name}
          className="flex items-center text-primary dark:text-primary-dark "
          href={contactItem.url}
          title={contactItem.name}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center mr-2">
            <Image
              src={`/svg/${contactItem.icon}`}
              alt={contactItem.name}
              height={24}
              width={24}
            />
          </div>

          {contactItem.name}
        </a>
      ))}
    </div>
  </div>
);

export default ResumeHeader;
