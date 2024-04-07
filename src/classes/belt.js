import siteUtilities from '~utilities/siteUtilities.js';

class Belt {

    constructor(beltData) {
        this.product = beltData;
    }

    _get(property, parent = null) {

        if (parent == null) {
            parent = this.product;
        }

        if (property in parent === false || parent[property].length === 0) return null;

        return parent[property];

    }

    getImage() {
        return this._get('image');
    }

    getTitle() {
        return this._get('title');
    }

    getSummary() {
        return this._get('summary');
    }

    getDescription() {
        return this._get('description');
    }

    getPrice() {
        return this._get('price');
    }

    getPrices() {
        return this._get('prices');
    }

    getProductCode() {
        return this._get('code');
    }

    getReviews(properties = null) {

        let reviews = this._get('reviews');

        if (properties === null) {
            return reviews;
        }

        // return specific propeties of the review arrays
        const filteredReviews = reviews.map(review => {

            let filteredReview = {};

            properties.forEach(property => {
                if (property in review) {
                    filteredReview[property] = review[property];
                }
            })

            return filteredReview;
        });

        return filteredReviews;
    }

    getAssets(type = null, value = null) {
        const assets = this._get('assets');

        // if no assets exist return null
        if (Array.isArray(assets) === false || assets.length === 0) return null;

        // if no type or value provided return all assets
        if (type === null && value === null) return assets;

        let selectedAssets = [];

        assets.forEach((asset) => {

            if (type === null) return;

            if (asset.hasOwnProperty('type') && asset.type === type) {

                if (value === null) {
                    selectedAssets.push(asset);
                } else if (asset.hasOwnProperty(value)) {
                    selectedAssets.push(asset[value]);
                }
            }

        });

        return selectedAssets;

    }

    getPriceObId(priceObj) {

        if (siteUtilities.isDev() && priceObj?.test_id) {
            return priceObj.test_id;
        }

        if (!priceObj.id) {
            return;
        }

        return priceObj.id;

    }

    getStripePriceId(code) {

        const stripePrices = this.getPrices();

        let priceId;
        stripePrices.forEach((priceObj) => {

            if (priceObj.type !== 'stripe' || !priceObj.id) {
                return;
            }

            if (priceObj.size !== code) return;

            priceId = this.getPriceObId(priceObj);

        });

        return priceId;

    }


    getProductOptions() {
        const sizes = this._get('sizes');

        if (sizes === null) return null;

        let productOptions = [];

        productOptions = sizes.map((size, index) => {

            const label = this._get('name', size);
            const code = this._get('code', size);

            if (label === null || code === null) return null;

            const priceId = this.getStripePriceId(code);

            if (priceId === null) return null;

            const rangeString = this.getSizeRangeString(size);

            let labelString = label;
            if (rangeString !== null) {
                labelString = label + ` (${rangeString})`;
            }

            return { label: labelString, value: priceId };
        })

        return productOptions;

    }

    getFirstWidthMeasurement() {

        const sizes = this._get('sizes');

        if (Array.isArray(sizes) === false) return null;

        let widthData = null;
        sizes.forEach(size => {

            if (!size.width || !size.unit) return;

            widthData = { width: size.width, unit: size.unit };

            return widthData;

        });

        return widthData;

    }

    convertWidthToInches() {

        const widthData = this.getFirstWidthMeasurement();

        if (widthData === null || !widthData.width || !widthData.unit) return '';

        return (widthData.width * 0.39370).toFixed(1);

    }

    getWidthString() {

        const widthData = this.getFirstWidthMeasurement();

        if (widthData === null || !widthData.width || !widthData.unit) return '';

        return widthData.width + widthData.unit + ` (${this.convertWidthToInches()}")`;

    }

    getSizeRangeString(size) {

        const fitRange = this._get('fitRange', size);

        if (fitRange === null) return null;

        const minFit = this._get('min', fitRange);
        const maxFit = this._get('max', fitRange);
        const unit = this._get('unit', size);

        if (minFit === null || maxFit === null || unit === null) return null;

        return `${minFit}-${maxFit}${unit}`;

    }

    getSizesString() {

        const sizes = this._get('sizes');

        let widthSizesArray = [];

        sizes.forEach(size => {

            const name = this._get('name', size);
            const unit = this._get('unit', size);

            if (name === null || unit === null) return;

            let string = name;

            const rangeString = this.getSizeRangeString(size);

            if (rangeString !== null) {
                string = name + ` (${rangeString})`;
            }

            widthSizesArray.push(string);

        });

        if (widthSizesArray.length === 0) return null;

        return widthSizesArray.join(', ');


    }

    getMaterialString() {

        return this._get('material');

    }

}

export default Belt;