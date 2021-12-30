import React from "react"

export const navLinks = [
    {
      name: "Meet Gian",
      url: "about",
    },
    {
      name: "Experience",
  
      url: "experience",
    },
    {
      name: "Projects",
  
      url: "projects",
    },
    {
      name: "Contact",
  
      url: "contact",
    },
  ]

export const NavLink = ({
  navLinkId,
  scrollToId,
  activeNavLinkId,
  setActiveNavLinkId,
  isMobile,
  closeMobileMenu
}) => {
  const handleClick = () => {
    isMobile && closeMobileMenu();
    setActiveNavLinkId(navLinkId)
    document.getElementById(scrollToId).scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? "activeClass" : ""}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  )
}


