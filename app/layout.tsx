import React from 'react'
import CommandBar from '../modules/command-bar/CommandBar'
import { Metadata, Viewport } from 'next'

import '../public/static/css/globals.css'
import '../public/static/css/prism.css'
import 'remixicon/fonts/remixicon.css'

export const viewport: Viewport = {
  themeColor: '#f4f4f5',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://cruuzazul.dev'),
  title: {
    default: 'Mickaël Alves',
    template: '%s | Mickaël Alves',
  },
  description: '👋🏼 Welcome to Mickaël Alves site! Web maker, app builder, and passionate speaker on web dev, design, and new tech. Web consultant at @Zenika 🔴, DX Engineer at @BedrockStreaming 📺. Speaker, educator, co-organizer of @LyonJS 🦁, @Appwrite Hero 🦸🏼‍♂️ & @Remotion Expert 🎬.',
  authors: [{ name: 'Mickaël Alves' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cruuzazul.dev',
    siteName: 'Mickaël Alves',
    title: 'Mickaël Alves',
    description: '👋🏼 Welcome to Mickaël Alves site! Web maker, app builder, and passionate speaker on web dev, design, and new tech. Web consultant at @Zenika 🔴, DX Engineer at @BedrockStreaming 📺. Speaker, educator, co-organizer of @LyonJS 🦁, @Appwrite Hero 🦸🏼‍♂️ & @Remotion Expert 🎬.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mickaël Alves',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mickaël Alves',
    description: '👋🏼 Welcome to Mickaël Alves site! Web maker, app builder, and passionate speaker on web dev, design, and new tech.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/avatar.png',
    apple: '/avatar.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/static/font/Biotif-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/font/NeuzeitGrotesk-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Critical CSS to prevent FOUC */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html, body {
                margin: 0;
                padding: 0;
                background: #08070b;
                color: #f2f2f2;
                -webkit-font-smoothing: antialiased;
              }
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <CommandBar>
          {children}
        </CommandBar>
      </body>
    </html>
  )
}
