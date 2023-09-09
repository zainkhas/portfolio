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
import ThemeRegistry from "@/components/ThemeRegistry";
import { Box, Stack } from "@/components";
import { cookies } from "next/headers";
import ThemeWrapper from "@/components/ThemeWrapper/ThemeWrapper";
import { COOKIE_DARK_THEME } from "@/common/constants";
import { theme_modes } from "@/theme/types";

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
        "en-US": "/",
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
  const theme = cookies().get(COOKIE_DARK_THEME)?.value;
  const isDark = theme === `${theme_modes.dark}`;

  return (
    <html lang="en">
      <ThemeWrapper isDark={isDark}>
        <ThemeRegistry options={{ key: "mui" }}>
          <Box
            className={`${plusJakartaSans.className}`}
            component="body"
            bgcolor="background"
            color="text"
          >
            <Stack
              mx="auto"
              px={{ xs: 4, md: 10, lg: 44 }}
              maxWidth={{ xxl: 0.7 }}
            >
              <MenuComponent menu={menu} />
              {children}
            </Stack>
          </Box>
        </ThemeRegistry>
      </ThemeWrapper>
    </html>
  );
}
