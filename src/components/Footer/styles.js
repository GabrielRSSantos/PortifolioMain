import styled from 'styled-components';

export const FooterComponent = styled.footer`
padding: 3rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-top: 1px solid gray;
width: 90%;
`;

export const Button = styled.button`
width: 100px;
height: 100px;
background-color: gray;
border: 1px solid gray;
border-radius: 50px;
cursor: pointer;
&:hover {
    background-color: ${(props) => props.inputcolor};
}
`;
