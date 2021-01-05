import {Component, OnInit} from '@angular/core';
import {AlgorithmService} from '../../../core/algorithm.service';
import {Algorithm} from '../../../shared/models/algorithm';
import {MarkdownService} from 'ngx-markdown';

@Component({
  selector: 'app-node-description',
  templateUrl: './node-description.component.html',
  styleUrls: ['./node-description.component.scss']
})
export class NodeDescriptionComponent implements OnInit {
  algorithm: Algorithm | null = null;

  constructor(private algorithmService: AlgorithmService, private markdownService: MarkdownService) {
  }

  ngOnInit(): void {
    this.algorithmService.currentAlgorithm.subscribe(a => {
      if (a) {
        this.algorithm = a;
      }
    });
  }

  goToGithub(): void {
    if (this.algorithm?.githubLink) {
      document.location.href = this.algorithm.githubLink;
    }
  }
}
