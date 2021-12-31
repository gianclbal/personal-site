import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { HeroContent, HeroWrapper, H1, H6, P } from "../elements"
import { Button } from "./Button"
import arrowrighticon from "../images/arrowright.svg"

export const Hero = ({ fixed }) => {
  const email = "giancbaldonado@gmail.com"
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "Banner.png" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <HeroWrapper>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <HeroContent>
        <H1 weight="regular" color="light">
          Gian Carlo L. Baldonado
        </H1>
        <div className="cta">
          <H6 weight="regular" color="light">
            Software engineer aspiring data scientist with passion for social
            justice & human-centered AI.
          </H6>
          <a
            href={`mailto:${email}`}
            aria-label="Send an email to Gian"
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              <P size="regular" color="light" weight="regular">
                Connect with Gian
              </P>
              <img src={arrowrighticon} alt="arrow right" />
            </Button>
          </a>
        </div>
      </HeroContent>
    </HeroWrapper>
  )
}
