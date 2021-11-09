import React, {useState, useEffect} from "react"
import { NavHeaderWrapper, Navbar, NavLinks } from "../elements"
import { useStaticQuery, Link, graphql } from "gatsby";

const navLinks = [
  {
    name: "Meet Gian",
    url: "#about",
  },
  {
    name: "Experience",

    url: "#experience",
  },
  {
    name: "Projects",

    url: "#projects",
  },
  {
    name: "Contact",

    url: "#contact",
  },
]

export const Nav = () => {
  
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `)

// 

  return (
    <NavHeaderWrapper>
      <Navbar>
        <div>
          <Link to="/">
            <img src={data.logo.publicURL} alt="gianclbal logo" />
          </Link>
        </div>

        <NavLinks>
          <ol>
            {navLinks.map(({ name, url }, i) => (
              <li key={i}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
          </ol>
        </NavLinks>
      </Navbar>
    </NavHeaderWrapper>
  )
}
