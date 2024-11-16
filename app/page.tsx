import {Home} from '../modules/home/Home';
import {Hero} from '../modules/home/Hero';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Mickaël Alves',
  description:
    "👋🏼 Web Maker, application builder, and passionate speaker on web development, design, computing, and new technologies! 👨🏻‍💻\n" +
    "Currently a web consultant at @Zenika 🔴, I also enjoy sharing my knowledge through teaching and speaking at conferences.\n" +
    "I’m a co-organizer of @LyonJS 🦁, an @Appwrite Hero 🦸🏼‍♂️, and a @Remotion Expert 🎬\n",
  icons: {
    icon: 'images/mickael-alves.png',
    apple: 'images/mickael-alves.png',
  },
};

export default function HomePage() {
  return (
    <Home>
      <Hero />
    </Home>
  );
}
