import { Link } from "gatsby"
import React from "react"

import { pageLinks } from "~utilities/utilities.js"
import Layout from "~components/layout/layout";
import Container from "~components/container/container";
import { GridContainer, Row, Col } from '~components/common/grid/grid';
import Title from "~components/title/title";
import Section from "~components/section/section";
import SEO from "~components/seo";

const NotFoundPage = () => (
  <Layout>

    <SEO title="404: Not found" />

    <Section options={{ marginLarge: true, paddingLarge: true }}>
      <Container>

        <GridContainer>
          <Row>

            <Col md={12} lg={9}>
              <Title>Page Not Found</Title>
              <p>Oops, you've just found a page that doesn&#39;t exist... click <Link to={pageLinks.home}>here</Link> to go to the homepage.</p>
            </Col>

          </Row>
        </GridContainer>

      </Container>
    </Section>
  </Layout>
)

export default NotFoundPage
