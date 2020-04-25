import React from 'react';

import { Input, SearchBoxWrapper } from './SearchBoxStyle';

const SearchBox = (props) => {
    return (
        <SearchBoxWrapper>
            <Input
                placeholder={props.placeholder}
                type="text"
                onInput={(e) => {
                    props.callback(e.target.value);
                }}
            />
        </SearchBoxWrapper>
    );
};

export default SearchBox;
