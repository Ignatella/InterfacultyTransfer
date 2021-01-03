import {Component, OnInit} from '@angular/core';
import {Acceptability} from '../shared/models/acceptability';
import {Algorithm} from '../shared/models/algorithm';
import {KatexOptions} from 'ng-katex';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  algorithms: Algorithm[] = [
    {
      name: 'Black Red Tree',
      language: 'C',
      difficulty: {
        name: 'Log(N)',
        acceptability: Acceptability.good
      }
    },
    {
      name: 'Binary Search Tree',
      language: 'Python',
      difficulty: {
        name: 'N',
        acceptability: Acceptability.acceptable
      }
    },
    {
      name: 'Eight Queens puzzle',
      language: 'C',
      realization: 'Brute Force',
      difficulty: {
        name: 'N^N',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Knights Tour puzzle',
      language: 'C',
      realization: 'Brute Force',
      difficulty: {
        name: 'N^N',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Tower of Hanoi puzzle',
      language: 'C',
      difficulty: {
        name: 'N^2',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Mag-Mino longest chain',
      language: 'Python',
      difficulty: {
        name: 'N*N!',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Mag-Mino sorting(linked list)',
      language: 'C',
      realization: 'Can be N*N if head is given',
      difficulty: {
        name: 'N^3',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Remove 2 castles from chessboard...',
      language: 'C',
      difficulty: {
        name: 'N^2',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'B-Search multidimensional',
      language: 'C',
      difficulty: {
        name: 'Log(N)',
        acceptability: Acceptability.good
      }
    },
    {
      name: 'Insert in sorted singly linked list',
      language: 'C',
      difficulty: {
        name: 'N',
        acceptability: Acceptability.good
      }
    },
    {
      name: 'Path from num to num',
      language: 'Python',
      difficulty: {
        name: '2^N',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Square Coincidence',
      language: 'Python',
      realization: 'K > N',
      difficulty: {
        name: '(N+2K)^2*N^2',
        acceptability: Acceptability.bad
      }
    },
    {
      name: 'Longest Chain',
      language: 'C',
      difficulty: {
        name: 'N',
        acceptability: Acceptability.good
      },
    },
    {
      name: 'Longest Core Nums Multiplication',
      language: 'C',
      difficulty: {
        name: '\\frac{N^2}{2}*\\sqrt{N}',
        acceptability: Acceptability.good
      },
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
