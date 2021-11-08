import styled from "styled-components";

export const StyledExperienceWrapper = styled.section`
    grid-column: 1 / span 14;
    padding: 0 70px;
    grid-row: 4 /5;
    position: relative;
    transition: 0.3s ease;
    background-color: ${props => props.theme.colors.eggshell};

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1/ span 12;
        padding: 0 35px;
    }

    .inner {
        display: grid;
        padding-top: 32px;
        grid-template-columns: 1fr 3fr;
        grid-gap: 10px;

        .header {

        }

        @media ${props => props.theme.breakpoints.tablet}{
            display: block;
        }
    }

`