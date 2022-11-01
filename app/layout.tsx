import '../styles/global.scss';
import '../styles/reset.scss';

import React from "react";
import Header from "../components/header";
import { Rubik } from "@next/font/google";

interface RootLayoutProps {
  children: React.ReactNode
}

const rubik = Rubik()

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