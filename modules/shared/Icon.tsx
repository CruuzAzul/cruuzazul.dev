import { HTMLAttributes } from 'react'
import styles from './Icon.module.css'

interface IconProps extends HTMLAttributes<HTMLElement> {
  className?: string
}

export function Icon({ className, ...props }: IconProps) {
  return <i className={`${styles.icon} ${className || ''}`} {...props} />
}
