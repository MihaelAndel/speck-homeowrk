import React from 'react';
import Loader from 'react-loader-spinner';

import './LoaderWrapper.scss';

const LoaderWrapper = () => {
    return (
        <div className="loader-wrapper">
            <Loader type="Oval" color="#7D2200" width={100} height={100} />
        </div>
    );
};

export default LoaderWrapper;
