import React from 'react';

import '~components/common/input/input.scss';

const Input = ({ ...rest }) => {
    return (
        <input
            {...rest}
        />
    );
}

export default Input;