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

const isDev = () => {

    // doesn't seem possible to use NODE_ENV (setting NODE_ENV in ci file or env vars not working)
    if (process.env.GATSBY_ENV === "development") {
        return true;
    }

    return false;

}

const siteUtilities = {
    getImageData,
    isDev
};



module.exports = siteUtilities;