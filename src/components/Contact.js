import React from "react"
import { StyledContactWrapper, P, H5 } from "../elements"
import { Link } from "gatsby"
import externalicon from "../images/external.svg"

export const Contact = () => {
  const email = "giancbaldonado@gmail.com"
  const socialMedia = [
    {
      name: "Instagram",
      url: "",
    },
    {
      name: "Twitter",
      url: "",
    },
  ]

  return (
    <StyledContactWrapper id="contact">
      <div className="inner">
        <div className="header">
          <P size="large" weight="bold">
            Contact
          </P>
        </div>
        <div className="contentTextCol">
          <div className="styledText">
            <H5>Follow me on social media</H5>
            <ul>
              {socialMedia.map(({ name, url }, i) => (
                <li key={i}>
                  <a href={url}  aria-label="View Gian's social media"
                target="_blank"
                rel="noreferrer">
                    {name} <img src={externalicon} alt="external" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="styledText">
            <H5>Check out my Github</H5>
            <ul>
              <li>
                <a href={"https://github.com/gianclbal"}  aria-label="View Gian's Github page"
                target="_blank"
                rel="noreferrer">
                  Github
                  <img src={externalicon} alt="external" />
                </a>
              </li>
            </ul>
          </div>
          <div className="styledText">
            <H5>Send me an email</H5>
            <ul>
              <li>
                <a href={`mailto:${email}`}  aria-label="Send an email to Gian"
                target="_blank"
                rel="noreferrer">
                  giancbaldonado@gmail.com{" "}
                  <img src={externalicon} alt="external" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledContactWrapper>
  )
}
