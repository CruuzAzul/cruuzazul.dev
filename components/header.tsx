import Image from "next/image";
import Logo from "../public/images/logo.png";
import Link from "next/link";
import React from "react";
import styled from '../styles/home/header.module.scss';
import {routes} from "../config/routes";


export default function Header() {
  return (
    <header className={styled.header}>
      <nav>
        <Image src={Logo} alt="logo" height={30}/>
        <ul>
          {
            routes.map((route) => (
              route.enabled && <li key={`route_${route.name}`}>
                <Link href={route.path}>
                  {route.name}
                </Link>
              </li>
            ))
          }
        </ul>
        <Image src={Logo} alt="logo" height={30}/>
      </nav>
    </header>
  );
}