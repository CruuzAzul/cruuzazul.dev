'use client'

import React from 'react'
import { LayoutGroup } from 'framer-motion'
import BaseLayout from '../layout/BaseLayout'
import FeaturedProject from './FeaturedProject'
import { FeaturedProjects } from './FeaturedProjects'
import type { Project } from './types/Project'
import items from '../../data/projects'

export default function ProjectsPage() {
  const renderFeatured = () => {
    const featured = ['Shortvid.io', 'Code In The Dark', 'Appwrite workshop']

    return items
      .map(item => {
        return item.projects.filter(project => featured.includes(project.title))
      })
      .filter(item => {
        if (item.length > 0) {
          return item
        }
      })
      .flat()
      .map((item, index) => {
        return <FeaturedProject key={index} project={item} />
      })
  }

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div key={index}>
          <h3>{item.year}</h3>
          <ul>
            {item.projects.map((project, pIndex) => {
              return <ProjectItem key={pIndex} project={project} />
            })}
          </ul>
        </div>
      )
    })
  }

  const getTotalProjects = () => {
    let total = 0

    for (let i = 0; i < items.length; i++) {
      total = total + items[i].projects.length
    }

    return total
  }

  return (
    <BaseLayout
      title="Projects // Mickaël Alves"
      tagline="Community. Build. Open Source."
      primaryColor="cyan"
      secondaryColor="green"
    >
      <LayoutGroup>
        <p>
          I enjoy working on side projects and <strong>building in public</strong>. I try to work on topics that can benefit the <strong>community</strong>. I contribute to open source, though not as much as I'd like. Here you can navigate to differents projects, some are still active, others have been discontinued.
        </p>

        <h2>Featured Projects</h2>
        <FeaturedProjects>{renderFeatured()}</FeaturedProjects>

        <h2>All Projects</h2>
        {renderAll()}
      </LayoutGroup>
    </BaseLayout>
  )
}

interface ProjectItemProps {
  project: Project
}

function ProjectItem(props: ProjectItemProps) {
  const { project } = props

  return (
    <li>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {project.title}
      </a>
    </li>
  )
}


