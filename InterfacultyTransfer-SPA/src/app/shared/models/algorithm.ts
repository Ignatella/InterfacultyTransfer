import {Difficulty} from './difficulty';

export interface Algorithm {
  name: string;
  id: string;
  language?: string;
  task?: string;
  realization?: string;
  difficulty?: Difficulty;
  description?: string;
  link?: string;
}
