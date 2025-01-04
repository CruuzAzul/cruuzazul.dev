import {FaBluesky, FaEnvelope, FaGithub, FaLinkedin, FaXTwitter} from "react-icons/fa6";

export const socials = [
  {
    name: 'Bluesky',
    url: 'https://bsky.app/profile/cruuzazul.dev',
    icon: <FaBluesky style={{ color: "#1285FE" }} />,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/CruuzAzul',
    icon: <FaGithub style={{ color: "#1F2329" }} />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/CruuzAzul',
    icon: <FaXTwitter style={{ color: "#0F141A" }} />,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/mickaelalves',
    icon: <FaLinkedin style={{ color: "#0B66C2" }} />,
  },
  {
    name: 'Email',
    url: 'mailto:alves.mckl@gmail.com',
    icon: <FaEnvelope style={{ color: "#38A5B1" }} />,
  },
];
