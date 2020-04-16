import React from 'react';

import './SearchBox.scss';

const SearchBox = (props) => {
    return (
        <div className="search-box">
            <input
                placeholder={props.placeholder}
                type="text"
                onInput={(e) => {
                    props.callback(e.target.value);
                }}
            />
        </div>
    );
};

export default SearchBox;
