import styled from 'styled-components';

export const Container = styled.div`
background-color: #f5f5f5;
display: flex;
flex-direction: column;
width: 100%;
@media (max-width: 768px) {
    height: auto;
    padding-bottom: 1rem;
}
`;

export const CardContainer = styled.div`
display: flex; 
justify-content: space-evenly;
flex-wrap: wrap;
@media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
}
`;