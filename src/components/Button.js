import styled from 'styled-components';

export const DropdownContainer = styled.button`
    text-transform: capitilize;
    font-size- 1.4rem;
    background: transparent;
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &hover{
        background: var(--lightblue);
        color:var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
`
