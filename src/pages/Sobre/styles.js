import styled from 'styled-components';

export const Container = styled.div`
display: flex;
background-color: #F8F8F8;
@media (max-width: 768px) {
    flex-wrap: wrap-reverse;
    height: auto;
}
`;

export const Left = styled.div`
width: 50%;
display: flex;
flex-direction: column;
padding: 5rem 5rem;
text-align: justify;
`;

export const Right = styled.div`
display: flex;
justify-content: center;
width: 50%;
align-items: center;
@media (max-width: 768px) {
    
`;

export const ImageContainer = styled.div`
width: 700px;
height: 400px;
display: flex;
justify-content: center;
align-items: flex-end;
border-radius: 40px;
background-color: #dbdbdb;
@media (max-width: 768px) {
}
`;