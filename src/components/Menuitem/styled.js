import styled from 'styled-components';

export const LinkArea = styled.a`
    display: flex;
    justify-content: center;
    aling-items: center;
    width: 60px;
    height: 60px; 
    background-color: ${props=>props.active ? '#175fad' : 'trasparent'};
    border-radius: 10px;
    margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
    width: 50px;
    height: autopx; 
`;