import styled from "styled-components"

export const P = styled.p`
  margin: ${props => (props.margin ? props.margin : 0)};
  font-size: ${props => {
    switch (props.size) {
      case "large":
        return "19.2px"
      case "regular":
        return "16px"
      case "small":
        return "13.3px"
      default:
        return "16px"
    }
  }};
  line-height: ${props => {
    switch (props.size) {
      case "large":
        return "32px"
      case "regular":
        return "28px"
      case "small":
        return "24px"
      default:
        return "28px"
    }
  }};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "regular":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  color: ${props => {
    switch (props.color) {
      case "blue":
        return props.theme.colors.blue
      case "darkest":
        return props.theme.colors.darkest
      case "dark":
        return props.theme.colors.dark
      case "light":
        return props.theme.colors.light
      case "eggshell":
        return props.theme.colors.eggshell
      default:
        return props.theme.colors.darkest
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
`
export const H1 = styled.h1`
  font-size: 57.3px;
  line-height: auto;
  color: ${props => {
    switch (props.color) {
      case "blue":
        return props.theme.colors.blue
      case "darkest":
        return props.theme.colors.darkest
      case "dark":
        return props.theme.colors.dark
      case "light":
        return props.theme.colors.light
      case "eggshell":
        return props.theme.colors.eggshell
      default:
        return props.theme.colors.darkest
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "regular":
        return 400
      case "bold":
        return 700
      default:
        return 400
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`
export const H2 = styled.h2`
  font-size: 47.8px;
  line-height: auto;
  color: ${props => {
    switch (props.color) {
      case "blue":
        return props.theme.colors.blue
      case "darkest":
        return props.theme.colors.darkest
      case "dark":
        return props.theme.colors.dark
      case "light":
        return props.theme.colors.light
      case "eggshell":
        return props.theme.colors.eggshell
      default:
        return props.theme.colors.darkest
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "regular":
        return 400
      case "bold":
        return 700
      default:
        return 300
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`
export const H3 = styled.h3`
  font-size: 39.8px;
  line-height: auto;
  color: ${props => {
    switch (props.color) {
      case "blue":
        return props.theme.colors.blue
      case "darkest":
        return props.theme.colors.darkest
      case "dark":
        return props.theme.colors.dark
      case "light":
        return props.theme.colors.light
      case "eggshell":
        return props.theme.colors.eggshell
      default:
        return props.theme.colors.darkest
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "regular":
        return 400
      case "bold":
        return 700
      default:
        return 300
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`
export const H4 = styled.h4`
  font-size: 33.2px;
  line-height: auto;
  color: ${props => {
    switch (props.color) {
      case "blue":
        return props.theme.colors.blue
      case "darkest":
        return props.theme.colors.darkest
      case "dark":
        return props.theme.colors.dark
      case "light":
        return props.theme.colors.light
      case "eggshell":
        return props.theme.colors.eggshell
      default:
        return props.theme.colors.darkest
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "regular":
        return 400
      case "bold":
        return 700
      default:
        return 300
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`
export const H5 = styled.h5`
  font-size: 27.6px;
  line-height: auto;
  color: ${props => {
    switch (props.color) {
      case "blue":
        return props.theme.colors.blue
      case "darkest":
        return props.theme.colors.darkest
      case "dark":
        return props.theme.colors.dark
      case "light":
        return props.theme.colors.light
      case "eggshell":
        return props.theme.colors.eggshell
      default:
        return props.theme.colors.darkest
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "regular":
        return 400
      case "bold":
        return 700
      default:
        return 300
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`
export const H6 = styled.h6`
  font-size: 23px;
  line-height: auto;
  color: ${props => {
    switch (props.color) {
      case "blue":
        return props.theme.colors.blue
      case "darkest":
        return props.theme.colors.darkest
      case "dark":
        return props.theme.colors.dark
      case "light":
        return props.theme.colors.light
      case "eggshell":
        return props.theme.colors.eggshell
      default:
        return props.theme.colors.darkest
    }
  }};
  font-weight: ${props => {
    switch (props.weight) {
      case "light":
        return 300
      case "regular":
        return 400
      case "bold":
        return 700
      default:
        return 300
    }
  }};
  text-align: ${props => (props.textAlign ? props.textAlign : "left")};
  margin: ${props => (props.margin ? props.margin : 0)};
`
