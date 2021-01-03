import {Component, OnInit} from '@angular/core';
import {NzFormatEmitEvent, NzTreeNode} from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  activatedNode?: NzTreeNode;
  nodes = [
    {
      title: 'Overview',
      isLeaf: true
    },
    {
      title: 'Red Black Tree',
      key: 1,
      expanded: false,
      children: [
        {title: 'leaf 0-0', key: '10', isLeaf: true},
        {title: 'leaf 0-1', key: '101', isLeaf: true}
      ]
    },
    {
      title: 'Eight Queens puzzle',
      key: 2,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '20', isLeaf: true},
        {title: 'leaf 1-1', key: '21', isLeaf: true}
      ]
    },
    {
      title: 'Knights Tour puzzle',
      key: 3,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '30', isLeaf: true},
        {title: 'leaf 1-1', key: '31', isLeaf: true}
      ]
    },
    {
      title: 'Tower of Hanoi puzzle',
      key: 4,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '40', isLeaf: true},
        {title: 'leaf 1-1', key: '41', isLeaf: true}
      ]
    },
    {
      title: 'Mag-Mino longest chain',
      key: 5,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '50', isLeaf: true},
        {title: 'leaf 1-1', key: '51', isLeaf: true}
      ]
    },
    {
      title: 'Mag-Mino sorting(linked list)',
      key: 6,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '60', isLeaf: true},
        {title: 'leaf 1-1', key: '61', isLeaf: true}
      ]
    },
    {
      title: 'Remove 2 castles from chessboard',
      key: 7,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '70', isLeaf: true},
        {title: 'leaf 1-1', key: '71', isLeaf: true}
      ]
    },
    {
      title: 'B-Search multidimensional',
      key: 8,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '80', isLeaf: true},
        {title: 'leaf 1-1', key: '81', isLeaf: true}
      ]
    },
    {
      title: 'Insert in sorted singly linked list',
      key: 9,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '90', isLeaf: true},
        {title: 'leaf 1-1', key: '91', isLeaf: true}
      ]
    },
    {
      title: 'Remove 2 castles from chessboard',
      key: 10,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '100', isLeaf: true},
        {title: 'leaf 1-1', key: '101', isLeaf: true}
      ]
    },
    {
      title: 'Path from num to num',
      key: 11,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '110', isLeaf: true},
        {title: 'leaf 1-1', key: '111', isLeaf: true}
      ]
    },
    {
      title: 'Square Coincidence',
      key: 12,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '120', isLeaf: true},
        {title: 'leaf 1-1', key: '121', isLeaf: true}
      ]
    },
    {
      title: 'Longest Chain',
      key: 13,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '130', isLeaf: true},
        {title: 'leaf 1-1', key: '131', isLeaf: true}
      ]
    },
    {
      title: 'Longest Core Nums Multiplication',
      key: 14,
      expanded: false,
      children: [
        {title: 'leaf 1-0', key: '140', isLeaf: true},
        {title: 'leaf 1-1', key: '141', isLeaf: true}
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
    // do something if u want
    if (data instanceof NzTreeNode) {
      data.isExpanded = !data.isExpanded;
    } else {
      const node = data.node;
      if (node) {
        node.isExpanded = !node.isExpanded;
      }
    }
  }

  activeNode(data: NzFormatEmitEvent): void {
    this.activatedNode = data.node!;
  }

  selectDropdown(): void {
    // do something
  }
}
