import React from "react";
import Image from "next/image";
import LogoLight from "../public/images/logo.png";
import LogoDark from "../public/images/logoDark.png";
import styled from '../styles/common/header.module.scss';
import {socials} from "../config/socials";
import Link from "next/link";
import ThemeSwitcher from "./themeSwitcher";
import {useTheme} from "next-themes";


export default function Header() {
  const {theme} = useTheme()

  return (
    <header className={styled.header}>
      <nav>
        <div className={styled.logo}>
          <Image src={theme === "dark" ? LogoDark : LogoLight} alt="logo" height={30}/>
        </div>
        <div className={styled.socials}>
          <ul>
            {
              socials.map((social) => (
                <li key={social.name}>
                  <Link href={social.url}>
                    {social.icon}
                  </Link>
                </li>
              ))
            }
          </ul>
        <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}