import { ReactNode, HTMLAttributes, forwardRef } from 'react'
import styles from './Box.module.css'

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  className?: string
}

export const Box = forwardRef<HTMLDivElement, BoxProps>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={`${styles.box} ${className || ''}`} {...props}>
      {children}
    </div>
  )
})

Box.displayName = 'Box'
