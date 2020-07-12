import React from 'react';

import '~components/content/content.scss';

// TODO setup functionality allow multi-demensional arrays so you can list elements within elements
// might be worth looking into an npm package to handle this logic?

const renderContentData = (data, index) => {

    const element = Object.keys(data);
    const content = Object.values(data);

    if (!element[0] || !content[0]) return '';

    if (element[0] === 'read-more-link') return ''; // TODO setup optional read more link

    // TODO setup check to catch incorrect html elements. Use try catch block?
    return React.createElement(element[0], { key: index }, content[0]);

}

const renderClassList = (options) => {

    let classList = "content";

    if (!options) return classList;

    if (options.textAlign === "center") {
        classList = classList + " text-center";
    }

    if (options.contained === true) {
        classList = classList + " content--contained";
    }

    return classList;

}

const Content = ({ content, options }) => {


    return (
        <div className={renderClassList(options)}>
            {content.map((data, index) => {
                return renderContentData(data, index);
            })}
        </div>
    );
}

export default Content;