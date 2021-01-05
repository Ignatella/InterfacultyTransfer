import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {NzFormatEmitEvent, NzTreeNode, NzTreeNodeOptions} from 'ng-zorro-antd/tree';
import {AlgorithmService} from '../../../core/algorithm.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  activatedNode?: NzTreeNodeOptions;
  lookingFor = 'Code';
  @Output() collapsed  = new EventEmitter<boolean>();

  nodes: NzTreeNodeOptions[] = [
    {
      title: 'Overview',
      isLeaf: true,
      key: '0000'
    },
    {
      title: 'Red Black Tree',
      key: 'Red Black Tree',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Red Black Tree Description', isLeaf: true},
        {title: 'Code', key: 'Red Black Tree Code', isLeaf: true}
      ]
    },
    {
      title: 'Binary Search Tree',
      key: 'Binary Search Tree',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Binary Search Tree Description', isLeaf: true},
        {title: 'Code', key: 'Binary Search Tree Code', isLeaf: true}
      ]
    },
    {
      title: 'Eight Queens puzzle',
      key: 'Eight Queens puzzle',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Eight Queens puzzle Description', isLeaf: true},
        {title: 'Code', key: 'Eight Queens puzzle Code', isLeaf: true}
      ]
    },
    {
      title: 'Knights Tour puzzle',
      key: 'Knights Tour puzzle',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Knights Tour puzzle Description', isLeaf: true},
        {title: 'Code', key: 'Knights Tour puzzle Code', isLeaf: true}
      ]
    },
    {
      title: 'Tower of Hanoi puzzle',
      key: 'Tower of Hanoi puzzle',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Tower of Hanoi puzzle Description', isLeaf: true},
        {title: 'Code', key: 'Tower of Hanoi puzzle Code', isLeaf: true}
      ]
    },
    {
      title: 'Mag-Mino longest chain',
      key: 'Mag-Mino longest chain',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Mag-Mino longest chain Description', isLeaf: true},
        {title: 'Code', key: 'Mag-Mino longest chain Code', isLeaf: true}
      ]
    },
    {
      title: 'Mag-Mino sorting(linked list)',
      key: 'Mag-Mino sorting(linked list)',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Mag-Mino sorting(linked list) Description', isLeaf: true},
        {title: 'Code', key: 'Mag-Mino sorting(linked list) Code', isLeaf: true}
      ]
    },
    {
      title: 'B-Search multidimensional',
      key: 'B-Search multidimensional',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'B-Search multidimensional Description', isLeaf: true},
        {title: 'Code', key: 'B-Search multidimensional Code', isLeaf: true}
      ]
    },
    {
      title: 'Insert in sorted singly linked list',
      key: 'Insert in sorted singly linked list',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Insert in sorted singly linked list Description', isLeaf: true},
        {title: 'Code', key: 'Insert in sorted singly linked list Code', isLeaf: true}
      ]
    },
    {
      title: 'Remove 2 castles from chessboard',
      key: 'Remove 2 castles from chessboard',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Remove 2 castles from chessboard Description', isLeaf: true},
        {title: 'Code', key: 'Remove 2 castles from chessboard Code', isLeaf: true}
      ]
    },
    {
      title: 'Path from num to num',
      key: 'Path from num to num',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Path from num to num Description', isLeaf: true},
        {title: 'Code', key: 'Path from num to num Code', isLeaf: true}
      ]
    },
    {
      title: 'Square Coincidence',
      key: 'Square Coincidence',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Square Coincidence Description', isLeaf: true},
        {title: 'Code', key: 'Square Coincidence Code', isLeaf: true}
      ]
    },
    {
      title: 'Longest Chain',
      key: 'Longest Chain',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Longest Chain Description', isLeaf: true},
        {title: 'Code', key: 'Longest Chain Code', isLeaf: true}
      ]
    },
    {
      title: 'Longest Core Nums Multiplication',
      key: 'Longest Core Nums Multiplication',
      expanded: false,
      selectable: false,
      children: [
        {title: 'Description', key: 'Longest Core Nums Multiplication Description', isLeaf: true},
        {title: 'Code', key: 'Longest Core Nums Multiplication Code', isLeaf: true}
      ]
    }
  ];

  constructor(private algorithmService: AlgorithmService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.algorithmService.currentAlgorithm.subscribe(algorithm => {
      if (algorithm === null) {
        return;
      }

      this.nodes.forEach((node) => {
        if (node.key === algorithm.id) {
          node.expanded = true;
          node.children?.forEach(childNode => {
            if (childNode.title === this.lookingFor) {
              this.activatedNode = childNode;
              this.activatedNode.selected = true;
            }
          });
        }
      });
    });

    if (!this.activatedNode) {
      const overview = this.nodes.find(node => {
        return node.title === 'Overview';
      });

      if (overview) {
        overview.selected = true;
        this.router.navigate(['algorithms', 'overview']);
      }
    }
  }

  openFolder(data: NzTreeNode | NzFormatEmitEvent): void {
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
    if (data.node && !data.node?.isSelectable) {
      data.node.isExpanded = !data.node?.isExpanded;
      return;
    }

    if (this.activatedNode) {
      this.activatedNode.selected = false;
    }

    this.nodes.forEach(node => {
      if (data.node?.title !== 'Overview') {
        node.selected = false;
      }
      node.children?.forEach(childNode => {
        childNode.selected = false;
      });
      this.nodes = [...this.nodes];
    });

    if (data.node) {
      this.lookingFor = data.node.title;
      const lastIndex = data.node.key.lastIndexOf(' ');
      this.algorithmService.updateCurrentAlgorithm(data.node.key.substring(0, lastIndex));
      let component = '';
      switch (data.node.title) {
        case 'Code':
          component = 'code';
          break;
        case 'Description':
          component = 'description';
          break;
      }
      this.collapsed.emit(true);
      this.router.navigate(['algorithms', component]);
    }
  }
}
