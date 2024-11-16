import classNames from 'classnames';
import React, {FC, HTMLAttributes} from 'react';
import styles from './IconLink.module.scss';
import {socials} from '../../../config/socials';
import Link from 'next/link';

export const IconLink: FC<HTMLAttributes<HTMLElement>> = ({className}) => (
  <ul className={classNames(styles.socialLinks, className)}>
    {socials.map((social) => (
      <li key={social.name}>
        <Link href={social.url} target="_blank" rel="noopener noreferrer">{social.icon}</Link>
      </li>
    ))}
  </ul>
);
