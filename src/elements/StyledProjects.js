import styled from "styled-components"

export const StyledProjectsWrapper = styled.section`
  grid-column: 1 / span 14;
  padding: 0 70px;
  grid-row: 5 / 6;
  position: relative;
  transition: 0.3s ease;
  padding-bottom: 60px;
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
        margin-bottom: 20px;
    }

    @media ${props => props.theme.breakpoints.tablet} {
      display: block;
      padding-bottom: 60px;
    }
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 16px;
    position: relative;
    list-style: none;
  }
`

export const StyledProject = styled.li`
  position: relative;
  


  :hover {
  }

  a {
      text-decoration: none;
  }

  .project-inner {
    background-color: ${props => props.theme.colors.eggshell};
    flex-direction: column; //makes items side by side, might need to change this...
    align-items: flex-start;
    display: flex;
    position: relative;
    padding: 16px;
    height: 100%;

    :hover {
      filter: brightness(95%);
    }
    .project-title {
      margin-bottom: 10px;
    }

    .project-tech-list {
      display: flex;
      flex-grow: 0.5;
      flex-wrap: wrap;
      list-style: none;

      li {
        font-size: 11.11px;
        font-weight: 700;
        color: ${props => props.theme.colors.dark};
        :not(:last-of-type) {
          margin-right: 8px;
        }
      }
    }

    .project-desc {
        padding-right: 24px;
        margin-bottom: 10px;
        
        
      p {
      }
    }

    .project-link {
      padding-top: 10px;
      
     

      a {
          
        img {
          width: 20px;
          height: 20px;
          filter: invert(62%) sepia(75%) saturate(7499%) hue-rotate(214deg) brightness(95%) contrast(103%);
        }

        .github-icon {
          margin-right: 20px;
        }

        :hover,
        :focus{
           img {
            filter: invert(62%) sepia(75%) saturate(7499%) hue-rotate(214deg) brightness(110%) contrast(103%);

           } 
        }
      }
    }

    footer {
    margin-top: --50px;
  }
  }
`
