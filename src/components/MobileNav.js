import React, { useState } from "react"
import { StyledMobileNavLinks } from "../elements"
import { NavLink, navLinks } from "."

export const MobileNavigation = () => {
  const [activeNavLinkId, setActiveNavLinkId] = useState("")

  return (
    <>
      <StyledMobileNavLinks>
        {navLinks.map(({ name, url }) => (
          <NavLink
            navLinkId={name}
            scrollToId={url}
            activeNavLinkId={activeNavLinkId}
            setActiveNavLinkId={setActiveNavLinkId}
          />
        ))}
      </StyledMobileNavLinks>
    </>
  )
}
