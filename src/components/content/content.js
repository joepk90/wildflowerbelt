import React from 'react';

import '~components/content/content.scss';

const renderContentData = (data, index) => {

    // TODO make paragraph component?
    if ('paragraph' in data) {
        return (<p className="content__paragraph" key={index}>{data.paragraph}</p>);
    }
}

const Content = ({content}) => {
    return ( 
        <div className="content">
            {content.map((data, index) => {
                return renderContentData(data, index);
            })}
        </div>
     );
}
 
export default Content;