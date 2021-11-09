import styled from "styled-components"

export const HeroWrapper = styled.section`
  grid-column: 1 / span 14;
  grid-row: 2 / 3;
  position: relative;
  transition: ease-in-out 0.3s;
  
  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 12;

  }

`

export const HeroContent = styled.div`
  padding: 0 70px;
  width: 100%;
  height: 100%;
  background: rgba(38, 38, 38, 0.2);
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: ease-in-out 0.3s;
  

  h1 {
    padding-top: 35px;
  
  }

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 35px;

    h1 {
      font-size: 47.8px;
    }
  }

  .cta {
    max-width: 484px;
    padding-bottom: 48px;

    h6 {
      padding-bottom: 18px;
    }

    a {
      width: 250px;
      img {
        width: 25px;
        
      }
    }

    /* @media ${props => props.theme.breakpoints.tablet} {
      h6 {
        font-size: 13.3px;
      }
    } */
  }

  

`

// export const Button = styled.button`
//     width: 310px;
//     height: 56px;
//     background-color: ${props => props.theme.colors.blue};
//     color: ${props => props.theme.colors.light};
//     padding: 12px 16px;
//     display: flex;
//     justify-content: space-between;

//     :hover,
//     :focus{
//         filter: brightness(110%);

//     }
// `
