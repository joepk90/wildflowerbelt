// TODO fix getSiteUrl setup
// const getSiteUrl = function () {

//     return 'poop';

//     return process.env.poop || `https://wildflowerbelt.com`;

//     // // TODO make this dynamic: process.env.PORT
//     // const devUrl = 'http://localhost:8000';

//     // if (!process.env.GATSBY_SITE_URL) return devUrl;

//     // // TODO get sitename from env variable
//     // return 'https://wildflowerbelt.com'

// }

const getImageData = function (filename, images) {

    if (filename === '' || !images.edges) return;

    const image = images.edges.find(n => {

        if (!n.node.relativePath) return null;

        return n.node.relativePath.includes(filename);

    });


    if (!image || !image.node.childImageSharp) {
        return null;
    }

    return image.node.childImageSharp;

}

const isStripeEnvDevelopment = () => {

    if (process.env.GATSBY_STRIPE_ENV === "development") {
        return true;
    }

    return false;

}

const siteUtilities = {
    getImageData,
    isStripeEnvDevelopment
};



module.exports = siteUtilities;