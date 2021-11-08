import styled from "styled-components"

export const StyledTabsWrapper = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    font-size: 16px;
    line-height: 32px;
    color: ${props => props.theme.colors.dark};
    align-content: flex-end;

    li {
      padding: 0 10px;
    }

    .react-tabs__tab--selected {
      font-weight: 800;
      background-color: ${props => props.theme.colors.light};
      position: relative;
      color: ${props => props.theme.colors.darkest};
    }
  }

  .content {
    padding-top: 60px;

    .aboutMeContent {
      display: grid;
      grid-template-columns: 3fr 1fr;
      grid-gap: 10px;

      .featureImage{

      }

      @media ${props => props.theme.breakpoints.mobile} {
        display: block;
      }
    }
    /*       
    h4 {

    }

    p {
    } */
  }
`
