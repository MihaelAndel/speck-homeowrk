import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Input = styled.input`
    width: 400px;
    line-height: 50px;
    border: 1px solid #cecece;
    border-radius: 6px;
    padding: 10px;
    font-size: 20px;

    &:focus {
        border-color: #c59613;
    }
`;
