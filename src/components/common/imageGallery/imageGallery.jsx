import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import { LightgalleryItem } from "react-lightgallery";

import Image from "~components/image/image";

import "lightgallery.js/dist/css/lightgallery.css";
import "~components/common/imageGallery/imageGallery.scss";

const renderSecondaryImages = (images, data) => {

    if (images.length < 2) return;

    const getImage = function (filename) {
        return data.images.edges.find(n => {
            return n.node.relativePath.includes(filename);
        });
    }

    return (

        <div className="image-gallery__thumbnails-wrapper">
            {images.slice(1).map((image, index) => {
                return (
                    <div key={index} className="image-gallery__thumbnail">
                        <LightgalleryItem group="any" src={getImage(image).node.childImageSharp.fluid.src} key={index} className="image-gallery__thumbnail">
                            <Image className="image-gallery__thumbnail-image" filename={image} />
                        </LightgalleryItem>
                    </div>
                )
            })}
        </div>
    );

}

const ImageGallery = ({ images }) => {

    // TODO I think this query should be made from the template file. Coud be good to look into querying the specific images required
    const data = useStaticQuery(graphql`
        query {
            images: allFile {
              edges {
                node {
                  relativePath
                  name
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
      `)

    const getImage = function (filename) {
        return data.images.edges.find(n => {
            return n.node.relativePath.includes(filename);
        });
    }

    if (Array.isArray(images) === false || images.length === 0) return;

    return (
        <div className="image-gallery">

            <div className="image-gallery__primary-image">
                <LightgalleryItem group="any" src={getImage(images[0]).node.childImageSharp.fluid.src} >
                    <Image className="image-gallery__gallery-image image-gallery__gallery-image--primary" alt="The Wildflower Belt" filename={images[0]} />
                </LightgalleryItem>
            </div>

            {renderSecondaryImages(images, data)}

        </div>
    );
}

export default ImageGallery;