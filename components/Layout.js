import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import NavBar from "./NavBar";

export const siteTitle = "Zain Ul Abdin Khaskheli";

export default function Layout({
  children,
  home,
  metaData,
  menu,
  title,
  description,
}) {
  return (
    <div className="container mx-auto px-8 lg:px-50 xl:px-60 md:px-30 md:px-20">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        <NavBar menu={menu} />
        {home ? (
          <div className="flex md:flex-row flex-col items-center">
            <Image
              priority
              src="/images/profile.png"
              height={140}
              width={140}
              alt=""
              className="rounded-[80px]"
            />
            <div className="md:ml-5 mt-4 text-center md:text-left">
              <h1 className="md:text-4xl text-2xl font-bold text-title">
                {metaData.fullName}
              </h1>
              <h3 className="md:text-xl text-lg text-title font-normal leading-10">
                {metaData.designation}{" "}
                <a href={metaData.company_url} target="_blank" rel="noreferrer">
                  <span className=" text-secondary">{`@${metaData.company}`}</span>
                </a>
              </h3>
            </div>
          </div>
        ) : (
          <div>
            <h1 className="md:text-4xl text-2xl font-bold text-title">
              {title}
            </h1>
            <div className="md:text-xl  text-base text-title font-normal leading-10 mt-5">
              {description}
            </div>
          </div>
        )}
      </header>

      <main className="my-10">{children}</main>

      {!home && <div></div>}
    </div>
  );
}
