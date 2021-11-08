import React from "react"
import { StyledContactWrapper, P, H5 } from "../elements"

export const Contact = () => {
  return (
    <StyledContactWrapper>
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
              <li>Instagram</li>
            </ul>
          </div>
          <div className="styledText">
            <H5>Check out my Github</H5>
            <ul>
              <li>Github</li>
            </ul>
          </div>
          <div className="styledText">
            <H5>Send me an email</H5>
            <ul>
              <li>giancbaldonado@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>
    </StyledContactWrapper>
  )
}
