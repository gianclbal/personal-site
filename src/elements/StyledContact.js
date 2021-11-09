import styled from "styled-components"

export const StyledContactWrapper = styled.section`
  grid-column: 1 / span 14;
  padding: 0 70px;
  grid-row: 6 / 7;
  position: relative;
  transition: 0.3s ease;
  background-color: ${props => props.theme.colors.eggshell};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 12;
    padding: 0 35px;
  }

  .inner {
    display: grid;
    padding-top: 32px;

    grid-template-columns: 1fr 3fr;
    grid-gap: 10px;

    .header {
    }

    .contentTextCol {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      

      /* @media ${props => props.theme.breakpoints.tablet} {
        display: block;
      } */

      .styledText {
        max-width: 310px;
        /* margin-bottom: 10px; */
        margin: 8px 0px;
        margin-right: 20px;

        h5 {
          margin-bottom: 28px;
        }

        ul {
          list-style: none;

          li {
            padding-bottom: 10px;
            a{
              text-decoration: none;
              color: ${props => props.theme.colors.blue};
              filter: invert(62%) sepia(75%) saturate(7499%) hue-rotate(214deg) brightness(95%) contrast(103%);
              

              :visited{
                color: ${props => props.theme.colors.blue};
              }

              :hover {
                border-bottom: ${props => props.theme.colors.blue} solid 2px;
              
                
              }
            }

            img {
              width: 12.5px;
              margin-left: 4px;
            }
          }
        }

        @media ${props => props.theme.breakpoints.tablet} {
          max-width: 100%;

          h5 {
          margin-bottom: 14px;
        }
        }
      }
      @media ${props => props.theme.breakpoints.mobile} {
        display: block;
       
      }
    }

      @media ${props => props.theme.breakpoints.tablet} {
        display: block;
        padding-bottom: 72px;
      
        .header {
            margin-bottom: 30px;
    }
    
      }
    
  }
`
