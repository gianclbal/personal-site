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
      background-color: ${props => props.theme.colors.light};
      position: relative;
      color: ${props => props.theme.colors.darkest};
      transition: 0.3 ease;
      border-bottom: 2.5px solid ${props => props.theme.colors.blue};

      /* 
      :after {
    border: none;
    background-color: #0062ff;
    bottom: -1px;
    content: '';
    height: 2px;
    height: 0.125rem;
    left: 0;
    position: absolute;
    -webkit-transition: background-color .25s cubic-bezier(.4,.14,.3,1),width .25s cubic-bezier(.4,.14,.3,1);
    transition: background-color .25s cubic-bezier(.4,.14,.3,1),width .25s cubic-bezier(.4,.14,.3,1);
    width: 0;
      
    } */
    }

    /* .content {
    padding-top: 60px;
  } */
  }
`
export const StyledContent = styled.div`
  padding-top: 60px;
  display: flex;

  /* display: grid;
      grid-template-columns: 3fr 1fr;
      grid-gap: 10px; */

  .featureImage {
    position: relative;
    justify-content: center;
    width: 100%;
    margin-right: 20px;

    .portrait {
      position: relative;
      max-width: 540px;
      height: auto;
    }

    .skills {
      position: relative;
      max-width: 340px;
      height: auto;
    }
  }

  .styledText {
    max-width: 510px;
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
