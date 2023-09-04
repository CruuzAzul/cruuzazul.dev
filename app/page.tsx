import {Home} from '../modules/home/Home';
import {Hero} from '../modules/home/Hero';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'Mickaël Alves',
  description:
    "I'm truly passionate about web development ! As a full-stack developer and a French speaker, I have a deep\n" +
    "appreciation for contributing to open-source projects, and I'm constantly seeking new challenges to tackle.",
  icons: {
    icon: 'images/logo.png',
    apple: 'images/logo.png',
  },
};

export default function HomePage() {
  return (
    <Home>
      <Hero />
    </Home>
  );
}
