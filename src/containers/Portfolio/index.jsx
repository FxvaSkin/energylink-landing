import React from 'react'
import cx from 'classnames'
import styles from './portfolio.module.css'
import { Section } from 'components/Section'
import { Header } from 'components/Header'
import { Card } from 'components/Card'
import { Link } from 'gatsby'

import { useStaticQuery, graphql } from 'gatsby'

const projects = [
  {
    key: 'project1',
    title: 'Project 1',
    description: 'проект об всяких всячинах',
  },
  {
    key: 'project2',
    title: 'Project 2',
    description: 'проект о том о сём и о десятом',
    image: '',
  },
  {
    key: 'project3',
    title: 'Project 3',
    description: 'blah blah blah',
  },
]

const Portfolio = () => {
  const data1 = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "code.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section id="portfolio" className={styles.section}>
      <Header as="h2">Проекты</Header>
      <div className={cx(styles.container)}>
        {projects?.map(project => (
          <Card
            key={project.key}
            imageData={data1}
            footer={
              <footer>
                <Link to="/proj1">Подробнее</Link>
              </footer>
            }
          >
            <Header as="h3">{project.title}</Header>
            <p>{project.description}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
export { Portfolio }
