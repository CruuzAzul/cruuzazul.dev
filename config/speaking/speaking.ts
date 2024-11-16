import {StaticImageData} from 'next/image';
import {reactCompilerEasierBetterFasterStronger} from './react-compiler-easier-better-faster-stronger';
import {AppwriteEstIlPretAEteindreFirebase} from './appwrite-est-il-pret-a-eteindre-firebase';
import {RemotionLe7emeArtAPorteeDeComposantsWebEtDApi} from './remotion-le-7eme-art-a-portee-de-composants-web-et-dapi';
import {StopALespionnageCommentDisparaitreDinternet} from './stop-a-lespionnage-comment-disparaitre-dinternet';
import {VoyageAuCoeurDappwrite} from './voyage-au-coeur-dappwrite';
import {EntretienTechDuneIaV0ReleveLeDefiEnDirect} from './entretien-tech-dune-ia-v0-releve-le-defi-en-direct';
import {JadoreLesDeveloppeursDans23AnsIlYEnAuraPlus} from './jadore-les-developpeurs-dans-2-3-ans-il-y-en-aura-plus';
import {FlutterLeFuturDuWeb} from './flutter-le-futur-du-web';

export interface Speaker {
  name: string;
  twitter: string;
}

export interface Conference {
  name: string;
  link: string;
  date: string;
  image: StaticImageData;
}

export interface Speaking {
  id: string;
  title: string;
  description: string;
  image: StaticImageData;
  format: string;
  videoId?: string;
  speaker: Speaker[];
  conferences: Conference[];
}

export const speaking: Speaking[] = [
  reactCompilerEasierBetterFasterStronger,
  AppwriteEstIlPretAEteindreFirebase,
  RemotionLe7emeArtAPorteeDeComposantsWebEtDApi,
  StopALespionnageCommentDisparaitreDinternet,
  VoyageAuCoeurDappwrite,
  EntretienTechDuneIaV0ReleveLeDefiEnDirect,
  JadoreLesDeveloppeursDans23AnsIlYEnAuraPlus,
  FlutterLeFuturDuWeb,
];
