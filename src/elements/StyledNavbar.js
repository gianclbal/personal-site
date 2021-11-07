import styled from "styled-components"

export const NavHeaderWrapper = styled.header`
  grid-column: 1 / span 14;
  grid-row: 1 / 2;
  padding: 0 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  transition: ease-in-out 0.3s;
  /* position: fixed; */

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 12;
    padding: 0 35px;
  }
`
export const Navbar = styled.nav`
  width: 100%;
  position: relative;
  z-index: 2;
  padding: 6px auto;
  display: flex;
  justify-content: space-between;

  /* grid-column: 2 / span 12;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;

    @media ${props => props.theme.breakpoints.tablet}{
        grid-column: 2 / span 8;
    } */

  img {
    height: 18.45px;
  }
`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  /* margin-left: auto; */

  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
  }

  ol {
    display: flex;
    justify-content: space-between;
    align-items: left;
    list-style: none;

    li {
      //add list styles for nav links here
      :not(:last-of-type) {
          padding: 0 40px 0px 0px;
      }

      a {
        color: ${props => props.theme.colors.darkest};
        text-decoration: none;
        vertical-align: text-top;

        //add link styles here
        :hover {
          transition: ease-in;
          color: ${props => props.theme.colors.blue};
        }
      }
    }
  }
`
