import styled from 'styled-components';

export const Container = styled.div`
display: flex;
height: 100vh;
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
padding: 10rem 10rem;
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
width: '1400px';
height: '700px';
display: 'flex';
justify-content: 'center';
align-items: 'flex-end';
borderRadius: '40px';
backgroundColor: '#d3d3d3';
@media (max-width: 768px) {
}
`;