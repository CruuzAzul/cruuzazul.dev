import { Metadata } from 'next'
import ProjectsPage from '../../modules/projects/ProjectsPage'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
  return <ProjectsPage />
}

