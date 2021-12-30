import React, { useState } from "react"
import { StyledMobileNavLinks } from "../elements"
import { NavLink, navLinks } from "."
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useStaticQuery, Link, graphql } from "gatsby"

export const MobileNavigation = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  const [activeNavLinkId, setActiveNavLinkId] = useState("")
  const [isOpen, setOpen] = useState(false);

  const menuIcon = <AiOutlineMenu className="hamburger" size='20px' color="hsl(0,0%,32%)" onClick={() => setOpen(!isOpen)}/>
  const closeIcon = <AiOutlineClose className="hamburger" size='20px' color="hsl(0,0%,32%)" onClick={() => setOpen(!isOpen)}/>
  
  const closeMobileMenu = () => setOpen(false);
  return (
    <>
      <StyledMobileNavLinks>

     

     

      {isOpen ? closeIcon : menuIcon}
        <div className="mylogo">
          {/* <Link to="/">
            <img src={data.logo.publicURL} alt="gianclbal logo" />
          </Link> */}
        </div>
        {isOpen && navLinks.map(({ name, url }) => (
          <NavLink
            navLinkId={name}
            scrollToId={url}
            activeNavLinkId={activeNavLinkId}
            setActiveNavLinkId={setActiveNavLinkId}
            isMobile={true}
            closeMobileMenu={closeMobileMenu}
          />
        ))}
         
      </StyledMobileNavLinks>
    </>
  )
}
