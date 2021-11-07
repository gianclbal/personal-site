import styled from "styled-components"

export const HeroWrapper = styled.section`
  grid-column: 1 / span 14;
  grid-row: 2 / 3;
  position: relative;
  transition: ease-in-out 0.3s;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 12;
  }

  /* @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 6;
  } */
`

export const HeroContent = styled.div`
  padding: 0 70px;
  width: 100%;
  height: 288px;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h1 {
    padding-top: 35px;
    /* padding-bottom: */
    color: ${props => props.theme.colors.light};
  }

  h6 {
    color: ${props => props.theme.colors.light};
  }

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 35px;
  }
`

export const Button = styled.button`
    width: 310px;
    height: 56px;
    background-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.light};
    padding: 12px 16px;
    display: flex;
    justify-content: space-between;

    :hover,
    :focus{
        filter: brightness(110%);

    }
`
