import {
  HOST,
  MAIN_IMAGE_PATH,
  PAGE_DESCRIPTIONS,
  PAGE_TITLES,
} from "@/common/metaData";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Menu as MenuComponent } from "@/components/Menu";
import { Menu } from "@/common/types";
import { getAll } from "@/lib/common";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = () => {
  return {
    title: PAGE_TITLES.MAIN,
    description: PAGE_DESCRIPTIONS.MAIN,
    metadataBase: new URL(HOST),
    alternates: {
      canonical: "/",
      languages: {
        "en-US": "/en-US",
      },
    },
    openGraph: {
      images: MAIN_IMAGE_PATH,
    },
  };
};

const getData = async () => {
  const { menu } = await getAll();
  return {
    menu,
  };
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  menu: Menu;
}) {
  const { menu } = await getData();
  return (
    <html lang="en">
      <body
        className={`${plusJakartaSans.className} container mx-auto px-8 lg:px-50 xl:px-60 md:px-30 md:px-20`}
      >
        <MenuComponent menu={menu} />
        {children}
      </body>
    </html>
  );
}
