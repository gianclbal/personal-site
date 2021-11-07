import styled from "styled-components";

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr; //change this if banner doesn't stretch
    grid-template-rows: 2.5rem 24.5rem 34rem auto 18.125rem 5.5rem;
    gap: 0 1rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columnns: 2rem repeat(8, 1fr) 2rem;
    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-template-columnns: 1rem repeat(4, 1fr) 1rem;
    }
`