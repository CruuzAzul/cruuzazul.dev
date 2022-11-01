import Image from "next/image";
import Link from "next/link";
import Me from '../public/images/me.png';
import Computer from '../public/images/computer.png';
import styled from '../styles/pages/home.module.scss';

import {FaDev, FaEnvelope, FaGithub, FaLinkedin, FaTwitter} from "react-icons/fa";

export default function Page() {
  return (
    <div className={styled.home}>
      <div className={styled.containerBackground}/>
      <div className={styled.container}>
        <div className={styled.pictureContainer}/>
      </div>
      <div className={styled.background}>
        <div className={styled.background_1}/>
        <div className={styled.background_2}/>
        <div className={styled.background_3}/>
        <div className={styled.background_4}/>
        <div className={styled.background_5}/>
        <div className={styled.background_6}/>
      </div>
      <div className={styled.container}>
        <Image src={Me} alt="Me" className={styled.picture}/>
      </div>
      <div className={styled.content}>
        <div className={styled.details}>
          <h2>Hey, I'm</h2>
          <h1>MICKAËL</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum, tortor in mattis luctus, nunc
            velit iaculis dui, aliquam mattis nibh nisi vitae dui. Tortor in mattis luctus, nunc
            velit iaculis dui, aliquam mattis nibh nisi vitae dui.</p>
        </div>
        <div className={styled.links}>
          <div className={styled.card}>
            <Image src={Computer} alt="pc" width={150} />
            <div className={styled.label}>
              <span>Web Developer</span>
            </div>
          </div>
          <div className={styled.socials}>
            <h2>Follow me ...</h2>
            <ul>
              <li>
                <Link href="mailto:alves.mckl@gmail.com">
                  <FaEnvelope/>
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/in/mickaelalves">
                  <FaLinkedin/>
                </Link>
              </li>
              <li>
                <Link href="https://github.com/CruuzAzul">
                  <FaGithub/>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/CruuzAzul">
                  <FaTwitter/>
                </Link>
              </li>
              <li>
                <Link href="https://dev.to/cruzazul">
                  <FaDev/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}