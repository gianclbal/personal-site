import styled from "styled-components"

export const NavHeaderWrapper = styled.header`
  grid-column: 1 / span 14;
  grid-row: 1 / 2;
  padding: 0 70px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  background-color: ${props => props.theme.colors.light};

  transition: ease-in-out 0.3s;
  
  /* position: fixed; */

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
  padding: 8px auto;
  display: flex;
  justify-content: space-between;

  img {
    height: 18.45px;
  }

  @media ${props => props.theme.breakpoints.mobile}{
    .mylogo {
      position: fixed;
      top: 1%;
    }
  }


`

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  /* margin-left: auto; */

  
  

  span {
    display: flex;
    justify-content: space-between;
    align-items: left;
    list-style: none;
    font-size: 16px;
    cursor: pointer;
    :not(:last-of-type) {
      padding: 0 40px 0px 0px;
    }
    color: ${props => props.theme.colors.darkest};
    text-decoration: none;
    vertical-align: text-top;

    //add link styles here
    :hover {
      transition: ease-in;
      color: ${props => props.theme.colors.blue};
    }
    /* 
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
    } */
  }

  @media ${props => props.theme.breakpoints.mobile} {
    display: none;
    /* flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.eggshell};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 60px;
    align-items: flex-start;

    span {
      align-items: flex-start;
      :not(:last-of-type) {
        padding: 0 0px 20px 40px;
      }
      padding: 0px 0px 20px 40px;
    }

    display: none; */
  }
`

export const StyledMobileNavLinks = styled.div`
  display: none;

  @media ${props => props.theme.breakpoints.mobile} {

    display: flex;
    flex-flow: column nowrap;
    background-color: ${props => props.theme.colors.light};
    /* opacity: 50%; */
    width: 100%;
    position: fixed;
    /* transform: translateY(-100%); */
    padding: 35px 35px 0px 35px;
    z-index: -2;
    top: 0;
    right: 0;

    /* .mylogo {
      position: relative;
      background: red;
      top: 0;
    } */

    .hamburger {
      position: absolute;
      right: 0%;
      margin-right: 35px;
      z-index: 1;
      margin-top: 10px;
      /* padding-top: 10px; */
      top: 0;
      
      cursor: pointer;
    }

    span {
    display: flex;
    justify-content: space-between;
    align-items: left;
    list-style: none;
    font-size: 16px;
    cursor: pointer;
   
      padding: 10px 40px 20px 0px;
    
    color: ${props => props.theme.colors.darkest};
    text-decoration: none;
    vertical-align: text-top;

    //add link styles here
    :hover {
      transition: ease-in;
      color: ${props => props.theme.colors.blue};
    }

    

  
   
  }

  
`
