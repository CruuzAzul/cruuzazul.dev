import styles from './HeroHome.module.scss';
import profilePicture from '../../public/images/mickael-alves.png';
import Image from 'next/image';

export const Hero = () => (
  <section className={styles.heroHome}>
    <div className={styles.heroInfo}>
      <div className={styles.intro}>
        <h1>
          Hey there, I’m
          <span>Mickaël Alves.</span>
        </h1>
        <p>
          👋🏼 Web Maker, application builder, and passionate speaker on web development, design, computing, and new
          technologies! 👨🏻‍💻
          <br /><br />
          Currently a web consultant at <strong>@Zenika</strong> 🔴, I also enjoy sharing my knowledge through teaching
          and speaking at conferences. I’m a co-organizer of <strong>@LyonJS</strong> 🦁, an <strong>@Appwrite </strong>
          Hero 🦸🏼‍♂️, and a <strong>@Remotion</strong> Expert 🎬
        </p>
      </div>
      <div className={styles.profilePicture}>
        <Image src={profilePicture} alt="Mickaël Alves" />
      </div>
    </div>
  </section>
);
