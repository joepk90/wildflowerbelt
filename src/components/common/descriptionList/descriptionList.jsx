import React from 'react';

import "~components/common/descriptionList/descriptionList.scss";


const renderDescriptionList = listItem => {

    return (
        <React.Fragment key={listItem.id}>
            <dt className="description-list__title">{listItem.title}</dt>
            <dd className="description-list__description">{listItem.content}</dd>
        </React.Fragment>
    );

}

const DescriptionList = ({ listData }) => {

    if (!listData) return;

    return (
        <dl className="description-list">
            {listData.map((listItem) => {
                return renderDescriptionList(listItem);
            })}
        </dl>
    );
}

export default DescriptionList;