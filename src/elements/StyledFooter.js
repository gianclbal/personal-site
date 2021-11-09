import styled from "styled-components"

export const FooterWrapper = styled.footer`
  grid-column: 1 / span 14;
  padding: 0 70px;
  display: flex;
  align-items: center;
  height: 66px;
  transition: ease-in-out 0.3s;
  /* position: fixed; */



  background-color: ${props => props.theme.colors.eggshell};

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 12;
    padding: 0 35px;
  }
`

export const FootBar = styled.div`

  width: 100%;
  position: relative;
  z-index: 2;
  padding: 28px auto;
  padding-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  border-top: 1px solid ${props=> props.theme.colors.dark};
  justify-content: space-between;


  p {
    margin: 10px 20px 5px 0px; //margin-right is set to 20px so that the footersocialwrapper gets pushed earlier
  }
`
export const FooterSocialWrapper = styled.div`
  display: flex;
  /* flex: 0 0 100%; */
  align-items: center;
  justify-content: space-between;
  margin: 5px 0px 5px 0px;
  

  a {
    display: flex;
    justify-content: space-between;
 
    :not(:last-of-type) {
          padding: 0 20px 0px 0px;
      }

    img {
      width: 15px;
      /* transition: filter 0.3s ease; */

      :hover,
      :focus {
        filter: brightness(0) saturate(100%) invert(62%) sepia(75%) saturate(7499%) hue-rotate(214deg) brightness(95%) contrast(103%);
      }
    }

  }

  
`
