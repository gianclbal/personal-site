import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FootBar, P } from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      github: file(relativePath: { eq: "github.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "linkedin.svg" }) {
        publicURL
      }
      instagram: file(relativePath: { eq: "instagram.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "twitter.svg" }) {
        publicURL
      }
    }
  `)

  return (
    <FooterWrapper>
      <FootBar>
        <div>
          <P size="small" color="dark">Gian Carlo L. Baldonado © 2021</P>
        </div>

        <FooterSocialWrapper>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="Github logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="Linkedin logo" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="Twitter logo" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.instagram.publicURL} alt="Instagram logo" />
          </a>
        </FooterSocialWrapper>
      </FootBar>
    </FooterWrapper>
  )
}
