import { ReactNode, HTMLAttributes } from 'react'
import styles from './FeaturedProjects.module.css'

interface FeaturedProjectsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const FeaturedProjects = ({ children, ...props }: FeaturedProjectsProps) => {
  return <div className={styles.featuredProjects} {...props}>{children}</div>
}
