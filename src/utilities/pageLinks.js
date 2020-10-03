// TODO include in utilities

import pagePaths from "~utilities/page-links" // todo include using utilities

const siteUrl = function () {

    return process.env.GATSBY_SITE_URL;

}

const orderConfirmationUrl = function () {

    return process.env.GATSBY_SITE_URL + pagePaths.orderConfirmation;

}

const widflowerBeltUrl = function () {

    return process.env.GATSBY_SITE_URL + pagePaths.wildflowerbelt;

}

export default {
    siteUrl,
    widflowerBeltUrl,
    orderConfirmationUrl
};