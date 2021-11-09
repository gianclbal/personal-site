import styled from "styled-components";

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 4.375rem repeat(12, 1fr) 4.375rem; //change this if banner doesn't stretch
    grid-template-rows: 2.5rem 24.5rem 34rem 34rem auto 18.125rem 4.125rem;
    gap: 0 1rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 2.188rem repeat(8, 1fr) 2.188rem;
        grid-template-rows: 2.5rem 24.5rem 34rem 34rem auto 18.125rem 4.125rem;
        
    }

    @media ${props => props.theme.breakpoints.mobile}{
        grid-template-columns: 0.781rem repeat(4, 1fr) 0.781rem;
        grid-template-rows: 2.5rem 24.5rem auto auto auto auto 4.125rem;
    }
`