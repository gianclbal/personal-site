import styled from "styled-components"

export const StyledTabsWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    font-size: 13.3px;
    line-height: 32px;
    color: ${props => props.theme.colors.dark};
    align-content: flex-end;

    li {
      margin: 0 10px;
      :first-of-type {
        margin: 0 10px 0 0;
      }

      :hover {
        border-bottom: 2.5px solid ${props => props.theme.colors.blue};
        cursor: pointer;
        :after {
          opacity: 1;
          transform: translate3d(-100%, 0, 0);
          transform-origin: right;
        }
      }
    }

    @media ${props => props.theme.breakpoints.mobile} {
      li {
        margin: 0 10px;
      }
    }

    .react-tabs__tab--selected {
      font-weight: 800;
      position: relative;
      color: ${props => props.theme.colors.darkest};
      transition: 0.3 ease;
      border-bottom: 2.5px solid ${props => props.theme.colors.blue};

    }

  
  }
`
export const StyledContent = styled.div`
  padding-top: 60px;
  display: flex;

  .featureImage {
    position: relative;
    justify-content: center;
    width: 100%;
    margin-right: 20px;

    .portrait {
      position: relative;
      max-width: 640px;
      min-width: 300px;
      height: auto;
    }

    .gatsby-image-wrapper{
      position: relative;
      max-width: 640px;
      height: auto;

    }

    .skills {
      position: relative;
      max-width: 340px;
      height: auto;
    }
  }

  .styledText {
    max-width: 810px;
    margin-bottom: 10px;


    @media ${props => props.theme.breakpoints.mobile} {
      margin: 20px 0;
      max-width: 100%;
    }
  }
  @media ${props => props.theme.breakpoints.mobile} {
    display: block;
  }
`
