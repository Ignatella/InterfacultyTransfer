import {Component, OnInit} from '@angular/core';
import {AlgorithmService} from '../../../core/algorithm.service';
import {Algorithm} from '../../../shared/models/algorithm';

@Component({
  selector: 'app-node-description',
  templateUrl: './node-description.component.html',
  styleUrls: ['./node-description.component.scss']
})
export class NodeDescriptionComponent implements OnInit {
  algorithm: Algorithm | null = null;

  constructor(private algorithmService: AlgorithmService) {
  }

  ngOnInit(): void {
    this.algorithmService.currentAlgorithm.subscribe(a => {
      if (a) {
        this.algorithm = a;
      }
    });
  }
}
