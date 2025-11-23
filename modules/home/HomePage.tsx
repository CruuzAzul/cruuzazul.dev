'use client'

import Image from 'next/image'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import ShortcutHome from '../shared/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../shared/Post'
import { Wrapper } from '../layout/Wrapper'
import { getPersonJsonLd } from '../../lib/json-ld'
import zenikaLogo from '../../public/static/images/companyLogos/zenika.webp'
import bedrockLogo from '../../public/static/images/companyLogos/bedrock.webp'
import styles from './HomePage.module.css'

const title = 'Mickaël Alves'

export default function HomePage() {
  return (
    <Wrapper>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPersonJsonLd())
        }}
        key="person-jsonld"
      />

      <Navbar />
      <PostMain className={styles.home}>
        <PostContent>
          <PostContainer>
            <div>
              <h1>{title}</h1>
              <p>
                <strong>Tech Lead Frontend at{' '}
                  <a href="https://www.zenika.com" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                    Zenika
                    <span className={styles.companyLogo}>
                      <Image src={zenikaLogo} alt="Zenika" width={16} height={16} unoptimized />
                    </span>
                  </a>
                  {' '}&{' '}
                  <a href="https://www.bedrockstreaming.com" target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
                    Bedrock Streaming
                    <span className={styles.companyLogo}>
                      <Image src={bedrockLogo} alt="Bedrock" width={16} height={16} unoptimized />
                    </span>
                  </a>
                </strong><br />
                Speaker • Passionate about Web, Tooling & Developer Experience
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </PostMain>
      <Footer />
    </Wrapper>
  )
}


