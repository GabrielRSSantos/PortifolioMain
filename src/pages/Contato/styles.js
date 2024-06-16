import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
width: 70%;
`;

export const Formdiv = styled.div`
display: flex;
flex-direction: column;
width: 70%;
`;

export const Label = styled.label`
height: 24px;
font-size: 32px;
padding: 2rem 2rem 1rem 0rem;
`;

export const Input = styled.input`
font-size: 24px;
padding: 0.5rem;
border-radius: 10px;
border: 1px solid gray;
`;


export const Button = styled.button`
display: flex;
justify-content: center;
padding: 1rem;
background-color: black;
width: 100%;
border-radius: 25px;
cursor: pointer;
&:hover {
    background-color: #333;
}
`;