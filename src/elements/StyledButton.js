import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const ButtonWrapper = styled(props => <Link {...props} />)`
  padding: 12px 16px;
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.light};
  font-weight: 300;
  font-size: 0.875rem;
  width: fit-content; //fits according to the size of the text and img
  transition: filter 0.3s ease;
  text-decoration: none;
  display: flex;
  justify-content: space-between; //added this so that the text and img can appear at the same row, spaced-out

  &:hover,
  &:focus {
    filter: brightness(110%);
  }
`
