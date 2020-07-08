import React from "react"
import { Link } from "gatsby"

import indexData from "~content/index.json"
import Layout from "~components/layout/layout";
import Image from "~components/image/image";
import Title from "~components/title/title";
import Container from "~components/container/container";
import Section from "~components/section/section";
import Content from "~components/content/content";
import HeroSlide from "~components/hero-slide/hero-slide";
import SEO from "~components/seo";
import { GridContainer, Row, Col } from '~components/common/grid/grid';

import "~scss/pages/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Section>
      <Container options={{fullWidth: true}}>
        <HeroSlide/> {/* should this be added here? potentially it should be passed into main? */}
      </Container>
    </Section>
    
    <Section options={{padding: true, margin: true}}>
      <Container>
        <Title options={{align: 'center'}}>{indexData.title}</Title>
        <Content content={indexData.description} />
      </Container>
    </Section>


    <Section>
      <Container>
        <GridContainer>
          <Row>

            <Col xs={12} sm={4}>
              <Link to="/product-details/">
                <Image alt="Snap On Feature" filename="snap-on-feature.jpg" />
              </Link>
            </Col>

            <Col xs={12} sm={4}>
              <Link to="/product-details/">
                <Image alt="Embossed Pattern" filename="embossed-pattern.jpg" />
              </Link>
            </Col>
            
            <Col xs={12} sm={4}>
              <Link to="/product-details/">
                <Image alt="Free Shipping" filename="free-shipping.jpg" />
              </Link>
            </Col>
          
          </Row>
        </GridContainer>
      </Container>
    </Section>
  
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
