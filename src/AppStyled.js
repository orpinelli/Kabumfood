import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    height: 100vh;
    background-color: #FF0000;
`;

export const Menu = styled.div `
    display: flex;
    justify-content: center;
    align-items: center; 
    background-color: #097bbb;
    width: 80px;
    flex-direction: column;
`;

export const PagBody = styled.div `
    display: flex;
    background-color: #00980d;
    background-image: url('/assets/bg.png');
    flex: 1;
    overflow-y: auto;
`;


