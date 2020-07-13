import React from 'react';

import Image from "~components/image/image";

import "~components/common/imageGallery/imageGallery.scss";

const renderSecondaryImages = images => {

    if (images.length < 2) return;

    return (
        <div className="image-gallery__secondary-images">
            {images.slice(1).map((image, index) => {
                return (
                    <div className="image-gallery__secondary-image-wrapper">
                        <Image key={index} className="image-gallery__secondary-image" filename={image} />
                    </div>
                )
            })}
        </div>
    );

}

const ImageGallery = ({ images }) => {

    if (Array.isArray(images) === false || images.length === 0) return;

    return (
        <div className="image-gallery">

            <Image className="image-gallery__primary-image" alt="The Wildflower Belt" filename={images[0]} />

            {renderSecondaryImages(images)}

        </div>
    );
}

export default ImageGallery;