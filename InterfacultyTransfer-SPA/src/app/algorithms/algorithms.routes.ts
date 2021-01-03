import {Routes} from '@angular/router';
import {AlgorithmsComponent} from './algorithms.component';
import {HomeComponent} from './components/home/home.component';

export const AlgorithmsRoutes: Routes = [
  {
    path: '', component: AlgorithmsComponent, children: [
      {path: '', component: HomeComponent}
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
