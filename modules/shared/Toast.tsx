import * as ToastPrimitive from '@radix-ui/react-toast'
import { PropsWithChildren } from 'react'
import styles from './Toast.module.css'

type ToastProps = PropsWithChildren<{
  title: string
  description: string
  isSuccess: boolean
  showToast: boolean
  setShowToast: (value: boolean) => void
}>

export default function Toast({ title, description, isSuccess, showToast, setShowToast, children }: ToastProps) {
  const iconColor = isSuccess ? '#4cb782' : '#b75c4c'
  const iconName = isSuccess ? 'checkbox-circle' : 'error-warning'

  return <ToastPrimitive.Provider>
    {children}
    <ToastPrimitive.Root
      open={showToast}
      onOpenChange={setShowToast}
      className={styles.root}
    >
      <div className={styles.iconContainer} style={{ color: iconColor }}>
        <i className={`ri-${iconName}-fill`} />
      </div>
      <div>
        <ToastPrimitive.Title className={styles.title}>{title}</ToastPrimitive.Title>
        <ToastPrimitive.Description className={styles.description}>{description}</ToastPrimitive.Description>
      </div>
      <ToastPrimitive.Close className={styles.close} aria-label="Close">
        <span aria-hidden="true">×</span>
      </ToastPrimitive.Close>
    </ToastPrimitive.Root>
    <ToastPrimitive.Viewport className={styles.viewport} />
  </ToastPrimitive.Provider>
}
