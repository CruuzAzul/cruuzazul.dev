'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import {IconLink} from '../navigation/links/IconLink';
import {Navbar} from '../navigation/Navbar';
import {MobileNavigation} from '../navigation/mobile/MobileNavigation';
import {useTheme} from 'next-themes';
import LogoLight from '../../public/images/logo.png';
import LogoDark from '../../public/images/logoDark.png';
import Image from 'next/image';
import React from 'react';

export const Header = () => {
  const {theme} = useTheme();

  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={theme === 'light' ? LogoLight : LogoDark} alt="logo" height={30} />
      </Link>

      <MobileNavigation />

      <Navbar className={styles.navbar} />
      <div className={styles.rightSideContainer}>
        <IconLink className={styles.socialLinks} />
      </div>
    </header>
  );
};
