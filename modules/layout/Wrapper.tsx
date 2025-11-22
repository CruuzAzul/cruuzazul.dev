import { ReactNode, HTMLAttributes } from 'react'
import styles from './Wrapper.module.css'

interface WrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export const Wrapper = ({ children, ...props }: WrapperProps) => {
  return <div className={styles.wrapper} {...props}>{children}</div>
}
