import styled from "styled-components"

export const StyledProjectsWrapper = styled.section`
  grid-column: 1 / span 14;
  padding: 0 70px;
  grid-row: 5 / 6;
  position: relative;
  transition: 0.3s ease;
  background-color: ${props => props.theme.colors.light};

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

        @media ${props => props.theme.breakpoints.tablet}{
            display: block;
        }
    }

    .projects-grid{
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 16px;
        position: relative;
        list-style: none;
    }
`

export const StyledProject = styled.li`
    position: relative;
    
    :hover{

    }

    .project-inner {
        background-color: ${props => props.theme.colors.eggshell};
        flex-direction: column;
        align-items: flex-start;
        position: relative;
        padding: 16px;

        :hover{
            filter: brightness(110%);
        }

       

    }
`
