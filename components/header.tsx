import React from 'react';
import Image from 'next/image';
import LogoLight from '../public/images/logo.png';
import LogoDark from '../public/images/logoDark.png';
import styled from '../styles/common/header.module.scss';
import {socials} from '../config/socials';
import Link from 'next/link';
import {routes} from '../config/routes';
import ThemeSwitcher from './themeSwitcher';
import {useTheme} from 'next-themes';
import {ActiveLink} from './activeLink';

export default function Header() {
  const {theme} = useTheme();

  return (
    <header className={styled.header}>
      <nav>
        <div className={styled.logo}>
          <Image src={theme === 'light' ? LogoLight : LogoDark} alt="logo" height={30} />
        </div>
        <ul className={styled.menu}>
          {routes.map(
            (route) =>
              route.enabled && (
                <ActiveLink key={`route_${route.name}`} href={route.path} name={route.name}>
                  {route.name}
                </ActiveLink>
              ),
          )}
        </ul>
        <div className={styled.socials}>
          <ul>
            {socials.map((social) => (
              <li key={social.name}>
                <Link href={social.url}>{social.icon}</Link>
              </li>
            ))}
          </ul>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
