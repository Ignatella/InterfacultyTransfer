import {Difficulty} from './difficulty';

export interface Algorithm {
  name: string;
  id: string;
  language?: string;
  realization?: string;
  taskLink?: string;
  realizationLink?: string;
  difficulty?: Difficulty;
  description?: string;
  link?: string;
  githubLink?: string;
}
