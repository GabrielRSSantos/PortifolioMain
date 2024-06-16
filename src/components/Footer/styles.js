import styled from 'styled-components';

export const FooterComponent = styled.footer`
padding: 1rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-top: 1px solid gray;
width: 90%;
`;

export const Button = styled.button`
width: 80px;
height: 80px;
background-color: gray;
border: 1px solid gray;
border-radius: 50px;
cursor: pointer;
&:hover {
    background-color: ${(props) => props.inputcolor};
}
`;
