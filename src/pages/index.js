import React from "react"
import { Link } from "gatsby"

import indexData from "~content/index.json"
import Layout from "~components/layout/layout";
import Image from "~components/image/image";
import Title from "~components/title/title";
import Section from "~components/section/section";
import Content from "~components/content/content";
import HeroSlide from "~components/hero-slide/hero-slide";
import SEO from "~components/seo";

import "~scss/pages/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Section>
      <HeroSlide/> {/* should this be added here? potentially it should be passed into main? */}
    </Section>
    
    <Section>
      <Title options={{align: 'center'}}>{indexData.title}</Title>
      <Content content={indexData.description} />
    </Section>
  
    
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image alt="Gatsby in Space" filename="gatsby-astronaut.png" />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
