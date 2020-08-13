const getSiteUrl = function () {

    // TODO make this dynamic: process.env.PORT
    const devUrl = 'http://localhost:8000';

    if (!process.env.GATSBY_SITE_URL) return devUrl;

    return process.env.GATSBY_SITE_URL;

}

const siteUtilities = {
    getSiteUrl,
};

module.exports = siteUtilities;