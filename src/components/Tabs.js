import React from "react"
import Img from "gatsby-image"
import { StyledTabsWrapper, StyledContent, H4, H6, P } from "../elements"
import { StaticImage } from "gatsby-plugin-image"
import { Tab, Tabs, Tablist, TabPanel, TabList } from "react-tabs"
import { useStaticQuery, graphql } from "gatsby"

export const AboutTabs = () => {
  return (
    <StyledTabsWrapper>
      <Tabs>
        <TabList>
          <Tab>About Me</Tab>
          <Tab>Education</Tab>
          <Tab>Skills</Tab>
          <Tab>Community</Tab>
        </TabList>
        <TabPanel className="content">
          <StyledContent>
            <div className="featureImage">
              <StaticImage
                className="portrait"
                src="../images/gianportrait.png"
                alt="Gian's portrait"
              />
            </div>
            <div>
              <div className="styledText">
                <H4>About Me</H4>
                <P size="small">
                  {" "}
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Recent technologies I've
                  worked with: React, Java, Docker Recent technologies I've
                  worked with: React, Java, Docker
                </P>
              </div>
            </div>
          </StyledContent>
        </TabPanel>
        <TabPanel className="content">
          <StyledContent>
            <div className="featureImage">
              <StaticImage
                className="portrait"
                src="../images/education.png"
                alt="Gian's portrait"
              />
            </div>
            <div>
              <div className="styledText">
                <H4>Education</H4>
                <P size="regular">
                  {" "}
                  San Francisco State University, 
                  <br/>
                  BS in Computer Science, 3.64
                  <br/>
                  Minor in Asian American Studies
                  <br/>
                  <br/>
                </P>
                  <P size="small">
                  Activities and Affiliations: Pilipino American Collegiate Endeavor, Cultural Coordinator (2019-2020); Campus Recreation Assessment Student Manager (2018-2020)
                
                    </P>
                  <br/>
                  <br/>
              
              </div>
            </div>
          </StyledContent>
        </TabPanel>
        <TabPanel className="content">
          <StyledContent>
            <div className="featureImage">
              <StaticImage
                className="portrait"
                src="../images/interests.png"
                alt="Gian's portrait"
              />
            </div>
            <div>
              <div className="styledText">
                <H6>Skills</H6>
                <P size="small">
                  {" "}
                  My current skills include working in web development with an agile, user-centered design approach. Recent technologies I use in my projects are React and Redux, Express, Java, and Python.
                </P>
              </div>
              <div className="styledText">
                <H6>Interests</H6>
                <P size="small">
                  {" "}
                  My interests lie in research and using my coding skills to discovering insights that create social impact. Particularly, I want to do research on Natural Language Processing and how its applications can help determine implicit bias or racism for positive social change.
                </P>
              </div>
            </div>
          </StyledContent>
        </TabPanel>
        <TabPanel className="content">
          <StyledContent>
            <div className="featureImage">
              <StaticImage
                className="portrait"
                src="../images/community.png"
                alt="Gian's portrait"
              />
            </div>
            <div>
              <div className="styledText">
                <H4>Community</H4>
                <P size="small">
                  {" "}
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                  exercitationem ullam corporis suscipit laboriosam, nisi ut
                  aliquid ex ea commodi consequatur? Recent technologies I've
                  worked with: React, Java, Docker Recent technologies I've
                  worked with: React, Java, Docker
                </P>
              </div>
            </div>
          </StyledContent>
        </TabPanel>
      </Tabs>
    </StyledTabsWrapper>
  )
}

export const ExperienceTabs = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/jobs/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              company
              date
              range
              location
              url
              description
              featureImage {
                publicURL
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const jobsData = data.allMdx.edges

  return (
    <StyledTabsWrapper>
      <Tabs>
        <TabList>
          {jobsData &&
            jobsData.map(({ node }, i) => {
              const { company } = node.frontmatter
              return <Tab key={i}>{company}</Tab>
            })}
        </TabList>

        {jobsData.map(({ node }, i) => {
          const { title, company, range, description } = node.frontmatter
          const featureImage =
            node.frontmatter.featureImage.childImageSharp.fluid

          return (
            <TabPanel className="content">
              <StyledContent>
                <div className="featureImage">
                  <Img
                    className="portrait"
                    key={i}
                    fluid={featureImage}
                    alt={title}
                    style={{
                      position: "relative",
                      maxWidth: "540px",
                    }}
                  />
                </div>
                <div>
                  <div className="styledText">
                    <H4 key={i}>{title}</H4>
                    <P key={i} className="subtitle">
                      {company}, {range}
                    </P>
                    <P size="small">{description}</P>
                  </div>
                </div>
              </StyledContent>
            </TabPanel>
          )
        })}
      </Tabs>
    </StyledTabsWrapper>
  )
}
