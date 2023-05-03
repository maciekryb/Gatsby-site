import { Link, graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import { header, btn } from "../styles/home.module.css";

export default function Home({ data }) {
  console.log(data);
  const { title, description } = data.site.siteMetadata;
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer based in Manchester</p>
          <Link className={btn} to="/projects">
            My portfolio Projects
          </Link>
        </div>
        <img src="/banner.png" alt="site banner" style={{ maxWidth: "100%" }}></img>
        <p>
          {title} - {description}
        </p>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query SiteInfo {
    site {
      siteMetadata {
        description
        title
      }
    }
  }
`;
