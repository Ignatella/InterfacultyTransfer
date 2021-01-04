import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Algorithm} from '../shared/models/algorithm';
import {Acceptability} from '../shared/models/acceptability';

@Injectable({
  providedIn: 'root'
})
export class AlgorithmService {
  currentAlgorithm: BehaviorSubject<Algorithm | null> = new BehaviorSubject<Algorithm | null>(null);

  algorithms: Algorithm[] = [
    {
      name: 'Red Black Tree',
      id: 'Red Black Tree',
      language: 'C',
      link: 'https://repl.it/@IhnatsiYermakov/Red-Black-Tree',
      task: 'Napisać Czerwono-Czarne Drzewo z operacjami wstawiania i usuwania elementów.' +
        ' <a href=\'https://pl.wikipedia.org/wiki/Drzewo_czerwono-czarne\'>URI</a>',
      difficulty: {
        name: 'Log(N)',
        acceptability: Acceptability.good
      }
    },
    {
      name: 'Binary Search Tree',
      id: 'Binary Search Tree',
      language: 'Python',
      link: 'https://repl.it/@IhnatsiYermakov/Binary-Search-Tree',
      difficulty: {
        name: 'N',
        acceptability: Acceptability.acceptable
      }
    },
    {
      name: 'Eight Queens puzzle',
      id: 'Eight Queens puzzle',
      language: 'C',
      realization: 'Brute Force',
      link: 'https://repl.it/@IhnatsiYermakov/Eight-Queens-Puzzle',
      difficulty: {
        name: 'N^N',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Knights Tour puzzle',
      id: 'Knights Tour puzzle',
      language: 'C',
      realization: 'Brute Force',
      link: 'https://repl.it/@IhnatsiYermakov/Knights-Tour-Puzzle',
      difficulty: {
        name: 'N^N',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Tower of Hanoi puzzle',
      id: 'Tower of Hanoi puzzle',
      language: 'C',
      link: 'https://repl.it/@IhnatsiYermakov/Tower-of-Hanoi-Puzzle',
      difficulty: {
        name: 'N^2',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Mag-Mino longest chain',
      id: 'Mag-Mino longest chain',
      language: 'Python',
      link: 'https://repl.it/@IhnatsiYermakov/Mag-Mino-Longest',
      difficulty: {
        name: 'N*N!',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Mag-Mino sorting(linked list)',
      id: 'Mag-Mino sorting(linked list)',
      language: 'C',
      realization: 'Can be N*N if head is given',
      link: 'https://repl.it/@IhnatsiYermakov/Sort-Mag-Mino-Dominoes',
      difficulty: {
        name: 'N^3',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Remove 2 castles from chessboard...',
      id: 'Remove 2 castles from chessboard',
      language: 'C',
      link: 'https://repl.it/@IhnatsiYermakov/Remove-2-Castles-From-Chessboard',
      difficulty: {
        name: 'N^2',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'B-Search multidimensional',
      id: 'B-Search multidimensional',
      language: 'C',
      link: 'https://repl.it/@IhnatsiYermakov/B-Search-In-Multidimensional-Array',
      difficulty: {
        name: 'Log(N)',
        acceptability: Acceptability.good
      }
    },
    {
      name: 'Insert in sorted singly linked list',
      id: 'Insert in sorted singly linked list',
      language: 'C',
      link: 'https://repl.it/@IhnatsiYermakov/Insert-String-in-Sorted-Linked-List',
      difficulty: {
        name: 'N',
        acceptability: Acceptability.good
      }
    },
    {
      name: 'Path from num to num',
      id: 'Path from num to num',
      language: 'Python',
      link: 'https://repl.it/@IhnatsiYermakov/Path-from-Num-to-Num',
      difficulty: {
        name: '2^N',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Square Coincidence',
      id: 'Square Coincidence',
      language: 'Python',
      realization: 'K > N',
      link: 'https://repl.it/@IhnatsiYermakov/Square-Coincidence',
      difficulty: {
        name: '(N+2K)^2*N^2',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Longest Chain',
      id: 'Longest Chain',
      language: 'C',
      link: 'https://repl.it/@IhnatsiYermakov/Longest-Chain',
      difficulty: {
        name: 'N',
        acceptability: Acceptability.good
      },
    },
    {
      name: 'Longest Core Nums Multiplication',
      id: 'Longest Core Nums Multiplication',
      language: 'C',
      link: 'https://repl.it/@IhnatsiYermakov/Find-Longest-Cor-Nums-Multiplication',
      difficulty: {
        name: '\\frac{N^2}{2}*\\sqrt{N}',
        acceptability: Acceptability.good
      },
    }
  ];

  updateCurrentAlgorithm(id: string): void {
    this.algorithms.forEach(algorithm => {
      if (algorithm.id === id) {
        this.currentAlgorithm.next(algorithm);
        return;
      }
    });
  }

  constructor() {
  }
}
