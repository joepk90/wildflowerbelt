import React from "react"

import "~scss/pages/wildflowerbelt.scss"

import { LightgalleryProvider } from "react-lightgallery";
import WildflowerbeltData from "~content/wildflowerbelt";
import Layout from "~components/layout/layout";
import { GridContainer, Row, Col } from '~components/common/grid/grid';
import Container from "~components/container/container";
import Section from "~components/section/section";
import ResponsiveTabs from "~components/common/responsiveTabs/responsiveTabs";
import Content from "~components/content/content";
import Reviews from "~components/reviews/reviews";
import ImageGallery from "~components/common/imageGallery/imageGallery"
import DescriptionList from '~components/common/descriptionList/descriptionList';
import WildflowerBeltProductDetails from '~components/wildflowerBeltProductDetails/wildflowerBeltProductDetails';
import Belt from "~classes/belt";
import SEO from "~components/seo";

// TODO should the belt class be removed and all data logic handled in the wildflowerBelt component?
// maybe the belt class should be called product? and should just handle generic product logic...
const wildflowerBelt = new Belt(WildflowerbeltData);
const productImages = [wildflowerBelt.getImage(), ...wildflowerBelt.getAssets('image', 'path')]

const WildflowerBelt = () => (
    <Layout>

        <SEO title="Wildflower Belt" className="wildflowerbelt" />

        <Section options={{ paddingLarge: true }}>
            <Container>
                <GridContainer>
                    <Row>
                        <Col md={12} lg={5}>
                            <LightgalleryProvider lightgallerySettings={{ download: false, fullScreen: false, actualSize: false, zoom: false, thumbnail: true }}>
                                <ImageGallery images={productImages} />
                            </LightgalleryProvider>
                        </Col>
                        <Col md={12} lg={7}>
                            <WildflowerBeltProductDetails product={{
                                title: wildflowerBelt.getTitle(),
                                summary: wildflowerBelt.getSummary(),
                                price: { amount: wildflowerBelt.getPrice(), currency: "£" },
                                options: wildflowerBelt.getProductOptions(),
                                code: wildflowerBelt.getProductCode(),
                                buyButtonLabel: "Buy Now"
                            }} />
                        </Col>
                    </Row>
                </GridContainer>

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
