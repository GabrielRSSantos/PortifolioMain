import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
height: 100%;
background-color: #f5f5f5;
display: flex;
flex-direction: column;
@media (max-width: 768px) {
    height: auto;
    padding-bottom: 1rem;
}
`;

export const CardContainer = styled.div`
display: flex; 
justify-content: space-evenly; 
padding: 8rem 0rem 0rem 0rem;
@media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
}
`;