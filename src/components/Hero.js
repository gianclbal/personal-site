import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { HeroContent, HeroWrapper, Icon, H1, H6, P } from "../elements"
import { Button } from "./Button"

export const Hero = ({ fixed }) => {
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
              A software engineer with a tyrst for data and human-centered
              solutions.
            </H6>
            <Button>
              <P size="regular" color="light" weight="light">
                Connect with Gian
              </P>
              {/* <img  alt="arrow right" /> */}
            </Button>
          </div>
      </HeroContent>
    </HeroWrapper>
  )
}
