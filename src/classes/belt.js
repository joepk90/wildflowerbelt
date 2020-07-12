class Belt {

    constructor(beltData) {
        this.belt = beltData;
    }

    _get(property, parent = null) {

        if (parent == null) {
            parent = this.belt;
        }

        if (property in parent === false || parent[property].length === 0) return null;

        return parent[property];

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