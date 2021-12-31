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
                  My name is Gian Carlo L. Baldonado, and I am software engineer
                  aspiring data scientist. My interests lie in the applications
                  of data science and machine learning to advance trustworthy
                  and equitable artificial intelligence research. Specifically,
                  I am interested in leveraging natural language processing
                  (NLP) to analyze micro-aggressions - a covert form of racism
                  or everyday discrimination - from a corpus. Some recent
                  technologies I’ve worked with are Python and its libraries
                  NumPy, Pandas, and Scikit-learn (see Skills for more info).
                  <br/>
                  <br/>
                  I’m currently applying to graduate programs for fall 2022.
                  Prior to this, I’m also looking for a research program for the
                  summer of 2022.
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
                  <br />
                  BS in Computer Science, 3.64
                  <br />
                  Minor in Asian American Studies
                  <br />
                  <br />
                </P>
                <P size="small">
                  I graduated San Francisco State University in May 2021 with a
                  B.S. in Computer Science and Minor in Asian American Studies
                  (GPA 3.64). For some time in college, I struggled to bridge
                  both my passions for social science and computer science until
                  I took a Human-Computer Interactions class that introduce that
                  paved the way towards my interests in interdisciplinary
                  research and human-centered artificial intelligence.
                  {""}
                  My goal to leverage social social and data science to engage
                  in interdisciplinary research is the source of my interest in
                  advancing my academic pursuit with a research and graduate
                  program.
                </P>
                <br />
                <br />
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
                  Some recent technologies I’ve worked with are Python and its
                  libraries NumPy, Pandas, and Scikit-learn. I’m proficient in
                  ReactJS and building APIs with Express. I have a basic
                  understanding of Java, MongoDB, and relational databases with
                  SQL. Check out my some of my projects below.
                </P>
              </div>
              <div className="styledText">
                <H6>Interests</H6>
                <P size="small">
                  {" "}
                  My interests are in NLP, computational-social relationship
                  research, and data analysis and collection. Oh, and I also
                  like writing, watching anime, and learning new languages. I’m
                  currently learning Thai.
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
                  From 2019-2020, I served as Cultural Coordinator for the
                  Pilipino American Collegiate Endeavor, a historic student
                  organization on campus that, along with the Third World
                  Liberation Front, helped realize the College of Ethnic
                  Studies. I presented workshops to a total of 20-30 students
                  for both fall and summer about Filipino and Asian American
                  cultures. 
                  <br/>
                  <br/>
                  Some of the workshops I presented were about
                  micro-aggressions and cultural humility. My
                  community is a big part of the reason why I’m pursuing
                  interdisciplinary research with data science and social
                  science.
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
                      maxWidth: "640px",
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
