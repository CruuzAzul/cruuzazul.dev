'use client';

import Link from 'next/link';
import styles from './Header.module.scss';
import {IconLink} from '../navigation/links/IconLink';
import {Navbar} from '../navigation/Navbar';
import {MobileNavigation} from '../navigation/mobile/MobileNavigation';
import Picture from '../../public/images/mickael-alves.png';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const shouldDisplayHeaderPicture = pathname !== '/';

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={classNames(styles.header, { [styles.scrolled]: isScrolled })}>
      <Link href="/">
        {
          shouldDisplayHeaderPicture ? (
            <Image className={styles.picture} src={Picture} alt="picture" height={50} />
          ) : <span className={styles.helloHand}>👋🏼</span>
        }
      </Link>

      <MobileNavigation />

      <Navbar className={styles.navbar} />
      <div className={styles.rightSideContainer}>
        <IconLink className={styles.socialLinks} />
      </div>
    </header>
  );
};
