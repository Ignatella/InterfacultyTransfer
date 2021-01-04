import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlgorithmService} from '../../../core/algorithm.service';

@Component({
  selector: 'app-node-code',
  templateUrl: './node-code.component.html',
  styleUrls: ['./node-code.component.scss']
})
export class NodeCodeComponent implements OnInit {
  link: string | null = null;

  constructor(private algorithmService: AlgorithmService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.algorithmService.currentAlgorithm.subscribe(algorithm => {
      if (algorithm?.link) {
        this.link = algorithm?.link;
        this.link += '?lite=true';
        return;
      }
      // this.router.navigate(['/algorithms']);
    });
    // this.link = this.activatedRoute.snapshot.queryParamMap.get('repl-link');
    // if (this.link == null) {
    //   this.router.navigate(['/algorithms']);
    // }
    // this.link += '?lite=true';
  }
}
