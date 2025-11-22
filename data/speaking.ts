import { ReactCompilerEasierBetterFasterStronger } from './speaking/react-compiler-easier-better-faster-stronger'
import { AppwriteEstIlPretAEteindreFirebase } from './speaking/appwrite-est-il-pret-a-eteindre-firebase'
import { RemotionLe7emeArtAPorteeDeComposantsWebEtDApi } from './speaking/remotion-le-7eme-art-a-portee-de-composants-web-et-dapi'
import { StopALespionnageCommentDisparaitreDinternet } from './speaking/stop-a-lespionnage-comment-disparaitre-dinternet'
import { VoyageAuCoeurDappwrite } from './speaking/voyage-au-coeur-dappwrite'
import { EntretienTechDuneIaV0ReleveLeDefiEnDirect } from './speaking/entretien-tech-dune-ia-v0-releve-le-defi-en-direct'
import { JadoreLesDeveloppeursDans23AnsIlYEnAuraPlus } from './speaking/jadore-les-developpeurs-dans-2-3-ans-il-y-en-aura-plus'
import { FlutterLeFuturDuWeb } from './speaking/flutter-le-futur-du-web'
import { HypeDrivenDevelopment } from './speaking/hype-driven-development'
import { CommunautesIt } from './speaking/communautes-it'
import { EtreJuniorDansLaTech } from './speaking/etre-junior-dans-la-tech'
import { LesCoulissesDeJavaScriptCeQuonUtiliseSansComprendre } from './speaking/les-coulisses-de-javascript-ce-quon-utilise-sans-comprendre'
import { RevolutionTanStackQueryEnfinUneBonneGestionDetat } from './speaking/revolution-tanstack-query-enfin-une-bonne-gestion-detat'
import type { Talk } from '../modules/talks/types/Talk'
import type { Workshop } from '../modules/talks/types/Workshop'
import type { Podcast } from '../modules/podcasts/types/Podcast'

export type { Talk } from '../modules/talks/types/Talk'
export type { Workshop } from '../modules/talks/types/Workshop'
export type { Conference } from '../modules/talks/types/Conference'
export type { Speaker } from '../modules/talks/types/Speaker'
export type { Podcast } from '../modules/podcasts/types/Podcast'
export type { Platform } from '../modules/podcasts/types/Platform'
export type { PlatformLink } from '../modules/podcasts/types/PlatformLink'

export const talks: Talk[] = [
  LesCoulissesDeJavaScriptCeQuonUtiliseSansComprendre,
  ReactCompilerEasierBetterFasterStronger,
  RemotionLe7emeArtAPorteeDeComposantsWebEtDApi,
  RevolutionTanStackQueryEnfinUneBonneGestionDetat,
  AppwriteEstIlPretAEteindreFirebase,
  StopALespionnageCommentDisparaitreDinternet,
  EntretienTechDuneIaV0ReleveLeDefiEnDirect,
  JadoreLesDeveloppeursDans23AnsIlYEnAuraPlus,
  FlutterLeFuturDuWeb,
]

export const workshops: Workshop[] = [VoyageAuCoeurDappwrite]

export const podcasts: Podcast[] = [HypeDrivenDevelopment, CommunautesIt, EtreJuniorDansLaTech]

export type Speaking = Talk | Workshop | Podcast

export const speaking: Speaking[] = [...talks, ...workshops, ...podcasts]

