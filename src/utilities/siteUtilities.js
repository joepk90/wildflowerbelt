const getSiteUrl = function () {

    // TODO make this dynamic: process.env.PORT
    const devUrl = 'http://localhost:8000';

    if (!process.env.GATSBY_SITE_URL) return devUrl;

    return process.env.GATSBY_SITE_URL;

}

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

const siteUtilities = {
    getSiteUrl,
    getImageData
};

module.exports = siteUtilities;