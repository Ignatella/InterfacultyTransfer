import {Component, OnInit} from '@angular/core';
import {Algorithm} from '../shared/models/algorithm';
import {AlgorithmService} from '../core/algorithm.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  algorithms: Algorithm[] = [];

  constructor(private algorithmService: AlgorithmService) {
  }

  ngOnInit(): void {
    this.algorithms = this.algorithmService.algorithms;
  }

  algorithmSelected(algorithm: Algorithm): void {
    this.algorithmService.currentAlgorithm.next(algorithm);
  }
}
