import React from "react";
import Image from "next/image";
import LogoDark from "../public/images/logoDark.png";
import styled from '../styles/common/header.module.scss';
import {socials} from "../config/socials";
import Link from "next/link";


export default function Header() {

  return (
    <header className={styled.header}>
      <nav>
        <div className={styled.logo}>
          <Image src={LogoDark} alt="logo" height={30}/>
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
        </div>
      </nav>
    </header>
  );
}