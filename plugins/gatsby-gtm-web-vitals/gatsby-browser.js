/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

import { getLCP, getFID, getCLS, getFCP, getTTFB } from 'web-vitals';

const sendToGTM = function (name, delta, id) {

    if (!window.dataLayer) {
        console.log('dataLayer not defined.');
        return;
    }

    window.dataLayer.push({
        event: 'web-vitals',
        event_category: 'Performance',
        event_action: name.name,
        event_value: Math.round(name.name === 'CLS' ? name.delta * 1000 : name.delta),
        event_label: name.id
    });
}

getCLS(sendToGTM);
getFID(sendToGTM);
getLCP(sendToGTM);
getFCP(sendToGTM);
getTTFB(sendToGTM);