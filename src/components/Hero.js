import React from "react";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { HeroContent, HeroWrapper, Button } from "../elements";

export const Hero = ({fixed}) => {
    const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "Banner.png" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

    
    
    return(<HeroWrapper>
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
            <h1>Gian Carlo L. Baldonado</h1>
            <h6>A  software engineer with a tyrst for data and human-centered solutions.</h6>
        </HeroContent>
        <Button>
            Connect with me
        </Button>
    </HeroWrapper>)
}