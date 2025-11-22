import { ReactNode, HTMLAttributes } from 'react'
import styles from './ListGroup.module.css'

interface ListGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode
}

export function ListGroup({ children, ...props }: ListGroupProps) {
  return (
    <ul className={styles.listGroup} {...props}>
      {children}
    </ul>
  )
}
