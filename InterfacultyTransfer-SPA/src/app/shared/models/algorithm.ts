import {Difficulty} from './difficulty';

export interface Algorithm {
  name: string;
  language?: string;
  realization?: string;
  difficulty?: Difficulty;
  description?: string;
  link?: string;
}
