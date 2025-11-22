import { ReactNode, ElementType, ComponentPropsWithoutRef } from 'react'
import styles from './ButtonPrimary.module.css'

type ButtonPrimaryProps<E extends ElementType = 'div'> = {
  as?: E
  children: ReactNode
  className?: string
} & Omit<ComponentPropsWithoutRef<E>, 'className' | 'children'>

export type { ButtonPrimaryProps }

export const ButtonPrimary = <E extends ElementType = 'div'>({ as, children, className, ...props }: ButtonPrimaryProps<E>) => {
  const Component = as || 'div'
  const combinedClassName = className ? `${styles.buttonPrimary} ${className}` : styles.buttonPrimary
  return <Component className={combinedClassName} {...props}>{children}</Component>
}
