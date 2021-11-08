import React from 'react';
import { useStaticQuery, graphql } from "gatsby"

export const Icon = () => {
    const iconData = useStaticQuery(graphql`
   query {
      github: file(relativePath: { eq: "arrowright.svg" }) {
        publicURL
      }
   }
  `)

  return iconData.arrowright.publicURL
}

