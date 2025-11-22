'use client'

import { useState, useEffect, JSX } from 'react'
import { ButtonPrimary } from './ButtonPrimary'

export default function ShortcutError(): JSX.Element {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent)

    if (isMobile) {
      return (
        <ButtonPrimary as="a" href="/">
          Tap to go home →
        </ButtonPrimary>
      )
    }

    return (
      <ButtonPrimary as="a" href="/">
        Press <kbd>G</kbd> <kbd>H</kbd> to go home →
      </ButtonPrimary>
    )
  }

  return <div />
}
