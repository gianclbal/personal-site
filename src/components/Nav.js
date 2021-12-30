import React, { useState, useEffect } from "react"
import {
  NavHeaderWrapper,
  Navbar,
  NavLinks,
  StyledMobileNavLinks,
} from "../elements"
import { NavLink, navLinks } from "../components/NavLinks"
import { MobileNavigation } from "."
import { useStaticQuery, Link, graphql } from "gatsby"

export const Nav = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

  const [activeNavLinkId, setActiveNavLinkId] = useState("")

  return (
    <NavHeaderWrapper>
      <Navbar>
        <div className="mylogo">
          <Link to="/">
            <img src={data.logo.publicURL} alt="gianclbal logo" />
          </Link>
        </div>

        <NavLinks>
          {navLinks.map(({ name, url }) => (
            <NavLink
              navLinkId={name}
              scrollToId={url}
              activeNavLinkId={activeNavLinkId}
              setActiveNavLinkId={setActiveNavLinkId}
            />
          ))}
        </NavLinks>
       
          <MobileNavigation />
       
      </Navbar>
    </NavHeaderWrapper>
  )
}
