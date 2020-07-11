import React from "react"

import WildflowerbeltData from "~content/wildflowerbelt";
import Layout from "~components/layout/layout";
import Container from "~components/container/container";
import Section from "~components/section/section";
import ResponsiveTabs from "~components/common/responsiveTabs/responsiveTabs";
import ProductDetails from "~components/productDetails/productDetails";
import Content from "~components/content/content";
import SEO from "~components/seo";

const WildflowerBelt = () => (
    <Layout>
        <SEO title="Wildflower Belt" />

        <Section options={{ paddingLarge: true }}>
            <Container>
                <ProductDetails></ProductDetails>
            </Container>
        </Section>

        <Section options={{ paddingLarge: true }}>
            <Container>
                <ResponsiveTabs tabsData={[
                    {
                        "title": "Descrition",
                        "content": <Content content={WildflowerbeltData.description} />,
                    },
                    {
                        "title": "Additional Information",
                        "content": "",
                    },
                    {
                        "title": "Reviews",
                        "content": "",
                    },
                ]}></ResponsiveTabs>
            </Container>
        </Section>


    </Layout>
)

export default WildflowerBelt
