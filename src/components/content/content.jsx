import React from 'react';

import '~components/content/content.scss';

const renderContentData = (data, index) => {

    // TODO make paragraph component?
    if ('paragraph' in data) {
        return (<p className="content__paragraph" key={index}>{data.paragraph}</p>);
    } else if ('h5' in data) {
        return (<h5 className="content__title" key={index}>{data.h5}</h5>);
    }
}

const Content = ({ content }) => {
    return (
        <div className="content">
            {content.map((data, index) => {
                return renderContentData(data, index);
            })}
        </div>
    );
}

export default Content;