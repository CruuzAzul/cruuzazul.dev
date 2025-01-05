import {StaticImageData} from 'next/image';
import {ReactCompilerEasierBetterFasterStronger} from './react-compiler-easier-better-faster-stronger';
import {AppwriteEstIlPretAEteindreFirebase} from './appwrite-est-il-pret-a-eteindre-firebase';
import {RemotionLe7emeArtAPorteeDeComposantsWebEtDApi} from './remotion-le-7eme-art-a-portee-de-composants-web-et-dapi';
import {StopALespionnageCommentDisparaitreDinternet} from './stop-a-lespionnage-comment-disparaitre-dinternet';
import {VoyageAuCoeurDappwrite} from './voyage-au-coeur-dappwrite';
import {EntretienTechDuneIaV0ReleveLeDefiEnDirect} from './entretien-tech-dune-ia-v0-releve-le-defi-en-direct';
import {JadoreLesDeveloppeursDans23AnsIlYEnAuraPlus} from './jadore-les-developpeurs-dans-2-3-ans-il-y-en-aura-plus';
import {FlutterLeFuturDuWeb} from './flutter-le-futur-du-web';

import {FaSpotify, FaApple, FaDeezer, FaYoutube} from 'react-icons/fa6';
import {HypeDrivenDevelopment} from './hype-driven-development';
import {CommunautesIt} from './communautes-it';

export interface Speaker {
  name: string;
  twitter: string;
}

export interface Conference {
  name: string;
  link?: string;
  date: string;
  image: StaticImageData;
}

type Format = 'Talk' | 'Workshop' | 'Quicky' | 'Podcast';

export interface Talk {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  format: Format;
  videoId?: string;
  speaker: Speaker[];
  conferences: Conference[];
}

export const talks: Talk[] = [
  ReactCompilerEasierBetterFasterStronger,
  AppwriteEstIlPretAEteindreFirebase,
  RemotionLe7emeArtAPorteeDeComposantsWebEtDApi,
  StopALespionnageCommentDisparaitreDinternet,
  EntretienTechDuneIaV0ReleveLeDefiEnDirect,
  JadoreLesDeveloppeursDans23AnsIlYEnAuraPlus,
  FlutterLeFuturDuWeb,
];

export interface Workshop extends Omit<Talk, 'videoId'> {}

export const workshops: Workshop[] = [VoyageAuCoeurDappwrite];

type Platform = 'Spotify' | 'Apple Podcast' | 'Deezer' | 'YouTube';

export const PlatformData: Record<Platform, { icon: typeof FaSpotify; color: string }> = {
  Spotify: {icon: FaSpotify, color: '#1DB954'},
  'Apple Podcast': {icon: FaApple, color: '#000'},
  Deezer: {icon: FaDeezer, color: '#FF0000'},
  YouTube: {icon: FaYoutube, color: '#FF0000'},
};

type PlatformLink = {
  platform: Platform;
  link: string;
};

export interface Podcast extends Talk {
  platformLinks: PlatformLink[];
}

export const podcasts: Podcast[] = [
  HypeDrivenDevelopment,
  CommunautesIt,
];

export type Speaking = Talk | Workshop | Podcast;

export const speaking: Speaking[] = [...talks, ...workshops, ...podcasts];
