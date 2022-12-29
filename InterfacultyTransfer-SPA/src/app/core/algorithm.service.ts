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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/RedBlackTree',
      realizationLink: 'assets/algorithms-descriptions/red-black-tree/realization.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/python/Ex%202019_2020/BST',
      realizationLink: 'assets/algorithms-descriptions/binary-search-tree/realization.md',
      taskLink: 'assets/algorithms-descriptions/binary-search-tree/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/WIET/Ex_2019-2020/Exercises/eight-queens-puzzle',
      realizationLink: 'assets/algorithms-descriptions/eight-queens-puzzle/realization.md',
      taskLink: 'assets/algorithms-descriptions/eight-queens-puzzle/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/WIET/Ex_2019-2020/Exercises/knights-tour-puzzle',
      realizationLink: 'assets/algorithms-descriptions/knights-tour-puzzle/realization.md',
      taskLink: 'assets/algorithms-descriptions/knights-tour-puzzle/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/WIET/Ex_2019-2020/Exercises/tower-of-hanoi-puzzle',
      taskLink: 'assets/algorithms-descriptions/tower-of-hanoi-puzzle/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/python/Ex%202019_2020/Test1_v3',
      taskLink: 'assets/algorithms-descriptions/mag-mino-longest-chain/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/WIET/Ex_2019-2020/Test3/sort-mag-mino-dominoes',
      taskLink: 'assets/algorithms-descriptions/mag-mino-sorting/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/WIET/Ex_2019-2020/Exercises/remove-2-castles-from-chessboard',
      taskLink: 'assets/algorithms-descriptions/remove-2-castles-from-chessboard/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/WIET/Ex_2019-2020/Exercises/b-search-in-multidimentional-array',
      taskLink: 'assets/algorithms-descriptions/b-search-multidimensional/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/WIET/Ex_2019-2020/Exercises/insert-string-sorted-linked-list',
      taskLink: 'assets/algorithms-descriptions/insert-in-sorted-singly-linked-list/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/python/Ex%202019_2020/Test2A/find-path-from-number-to-number',
      taskLink: 'assets/algorithms-descriptions/path-from-num-to-num/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/python/Ex%202019_2020/Test2A/squeare-considence',
      taskLink: 'assets/algorithms-descriptions/square-coincidence/task.md',
      realizationLink: 'assets/algorithms-descriptions/square-coincidence/realization.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/WIET/Ex_2019-2020/Test2A/longest-chain',
      taskLink: 'assets/algorithms-descriptions/longest-chain/task.md',
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
      githubLink: 'https://github.com/Ignatella/AGH_Algorithms/tree/master/SEM_1/C/WIET/Ex_2019-2020/Exercises/find-longest-cor-nums-multiplication',
      taskLink: 'assets/algorithms-descriptions/longest-cor-nums-multiplication/task.md',
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

  resetCurrentAlgorithm(): void {
    this.currentAlgorithm.next(null);
  }

  constructor() {
  }
}
