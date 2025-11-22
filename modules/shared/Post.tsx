import { ReactNode, HTMLAttributes } from 'react'
import styles from './Post.module.css'

interface PostComponentProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export const PostMain = ({ children, ...props }: PostComponentProps) => {
  return <main className={styles.postMain} {...props}>{children}</main>
}

export const Post = ({ children, ...props }: PostComponentProps) => {
  return <main className={styles.post} {...props}>{children}</main>
}

export const PostContainer = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={styles.postContainer} {...props}>{children}</div>
}

export const PostContent = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className={styles.postContent} {...props}>{children}</div>
}
