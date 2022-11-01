import Image from "next/image";
import Logo from "../public/images/logo.png";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header>
      <nav>
        <Image src={Logo} alt="logo" height={30}/>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/articles">Articles</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/speaking">Speaking</Link>
          </li>
        </ul>
        <Image src={Logo} alt="logo" height={30}/>
      </nav>
    </header>
  );
}