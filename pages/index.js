import Head from "next/head";
import Content from "../components/Content";
import Layout from "../components/Layout";
import Section from "../components/Section";
import Social from "../components/Social";
import Title from "../components/Title";
import { getAbout, getFooter } from "../lib/about";
import { getAll } from "../lib/common";

export const siteTitle = "Zain Ul Abdin Khaskheli";

export async function getStaticProps() {
  const about = await getAbout();
  const footer = await getFooter();
  const { metaData, menu } = await getAll();
  return {
    props: {
      about,
      metaData,
      menu,
      footer,
    },
  };
}

export default function Home({ about, metaData, menu, footer }) {
  return (
    <Layout home metaData={metaData} menu={menu}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section>
        <Title>About me</Title>
        <Content>
          <div
            className="text-primary dark:text-primary-dark "
            dangerouslySetInnerHTML={{ __html: about.contentHtml }}
          />
        </Content>
      </Section>
      <Section id="contact">
        <Title>Contact</Title>
        <Content>
          <div
            className="text-primary dark:text-primary-dark "
            dangerouslySetInnerHTML={{ __html: footer.contentHtml }}
          />
          <Social links={metaData.social_links} />
        </Content>
      </Section>
    </Layout>
  );
}
