import React from "react"
import { StyledProjectsWrapper, StyledProject, P } from "../elements"
import { useStaticQuery, graphql } from "gatsby"
import externalicon from "../images/external.svg"
import githubicon from "../images/github.svg"

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              tech
              repo
              external
              desc
            }
          }
        }
      }
    }
  `)

  const projects = data.allMdx.edges.filter(({ node }) => node)

  const projectInner = node => {
    const { frontmatter } = node
    const { title, tech, repo, external, desc } = frontmatter

    return (
      <a
        href={external ? external : repo}
        aria-label="project link"
        target="_blank"
        rel="noreferrer"
      >
        <div className="project-inner">
          <header className="project-title">
            <P size="regular" weight="bold">
              {title}
            </P>
          </header>
          <ul className="project-tech-list">
            {tech.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
          <div className="project-desc">
            <P size="small">{desc}</P>
          </div>
          <footer className="project-link">
            {repo && (
              <a
                href={repo}
                aria-label="Github"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="github-icon"
                  src={githubicon}
                  alt="Github icon"
                ></img>
              </a>
            )}
            {external && (
              <a
                href={external}
                aria-label="Live link"
                taget="_blank"
                rel="noreferrer"
              >
                <img
                  src={externalicon}
                  className="external-icon"
                  alt="External icon"
                ></img>
              </a>
            )}
          </footer>
        </div>
      </a>
    )
  }

  return (
    <StyledProjectsWrapper id="projects">
      <div className="inner">
        <div className="header">
          <P size="large" weight="bold">
            Projects
          </P>
        </div>
        <div>
          <ul className="projects-grid">
            {projects &&
              projects.map(({ node }, i) => (
                <StyledProject key={i}>{projectInner(node)}</StyledProject>
              ))}
          </ul>
        </div>
      </div>
    </StyledProjectsWrapper>
  )
}
