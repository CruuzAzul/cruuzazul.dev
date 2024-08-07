import { slugify } from '../../seo/slugify';
import {Speaking} from '../../../config/speaking';

const TALK_DELIMITER = '-t_';
export const slugTalkTitle = (talk: Speaking) => `${slugify(talk.title)}${TALK_DELIMITER}${talk.id}`;

const parsingRegexp = /-t_(?<talkId>\d+)([\/?])?/;

export const parserTalkIdFromSlug = ({slug}: {slug: string}) => {
  const match = slug.match(parsingRegexp);

  return match?.groups?.talkId;
};