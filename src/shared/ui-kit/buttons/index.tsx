import styled from 'styled-components'

export const CustomSubmit = styled.button`
    height: 30px;
    margin-top: 10px;
    border-radius: 5px;
    background: ${(props) => props.color ? props.color : '#39a2fabf'};
    transition: background 1s;
    width: 100%;
    &:hover {
        background: #74c0ffbf;
    }
`