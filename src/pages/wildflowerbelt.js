import React from "react"

import WildflowerbeltData from "~content/wildflowerbelt";
import Layout from "~components/layout/layout";
import Container from "~components/container/container";
import Section from "~components/section/section";
import ResponsiveTabs from "~components/common/responsiveTabs/responsiveTabs";
import ProductDetails from "~components/productDetails/productDetails";
import Content from "~components/content/content";
import Reviews from "~components/reviews/reviews";
import DescriptionList from '../components/common/descriptionList/descriptionList';
import Belt from "~classes/belt";
import SEO from "~components/seo";


const wildflowerBelt = new Belt(WildflowerbeltData);

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
                        id: "description",
                        title: "Description",
                        content: (<Content content={WildflowerbeltData.description} />),
                    },
                    {
                        id: "additional-info",
                        title: "Additional Information",
                        content: (<DescriptionList listData={[
                            {
                                id: "sizes",
                                title: "Sizes",
                                content: wildflowerBelt.getSizesString()
                            },
                            {
                                id: "width",
                                title: "Width",
                                content: wildflowerBelt.getWidthString()
                            },
                            {
                                id: "material",
                                title: "Material",
                                content: wildflowerBelt.getMaterialString()
                            },
                            {
                                id: "buckle",
                                title: "Buckle",
                                content: "Not Included"
                            },
                            {
                                id: "shipping",
                                title: "Shipping",
                                content: "Fast & Free"
                            },
                        ]} />),
                    },
                    {
                        id: "reviews",
                        title: "Reviews",
                        content: (<Reviews reviewsData={WildflowerbeltData.reviews}></Reviews>)
                    },
                ]}></ResponsiveTabs>
            </Container>
        </Section>


    </Layout>
)

export default WildflowerBelt
