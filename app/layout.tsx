import '../styles/global.scss';
import '../styles/reset.scss';

import React from 'react';
import {Rubik} from 'next/font/google';
import {Header} from '../modules/header/Header';
import {Metadata} from 'next';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  description:
    '👋🏼 Welcome to Mickaël Alves site! Web maker, app builder, and passionate speaker on web dev, design, and new tech. Web consultant at @Zenika 🔴, DX Engineer at @BedrockStreaming 📺. Speaker, educator, co-organizer of @LyonJS 🦁, @Appwrite Hero 🦸🏼‍♂️ & @Remotion Expert 🎬.',
  icons: {
    icon: 'images/mickael-alves.png',
    apple: 'images/mickael-alves.png',
  },
};

const rubik = Rubik({subsets: ['latin']});

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="fr" className={rubik.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
