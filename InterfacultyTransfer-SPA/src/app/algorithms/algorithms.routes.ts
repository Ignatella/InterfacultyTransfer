import {Routes} from '@angular/router';
import {AlgorithmsComponent} from './algorithms.component';
import {HomeComponent} from './components/home/home.component';
import {NodeCodeComponent} from './components/node-code/node-code.component';
import {OverviewComponent} from './components/overview/overview.component';
import {NodeDescriptionComponent} from './components/node-description/node-description.component';

export const AlgorithmsRoutes: Routes = [
  {
    path: '', component: AlgorithmsComponent, children: [
      {
        path: '', component: HomeComponent, children: [
          {path: '', component: OverviewComponent},
          {path: 'code', component: NodeCodeComponent},
          {path: 'description', component: NodeDescriptionComponent}
        ]
      },
    ]
  },
  {path: '**', redirectTo: '', pathMatch: 'full'},
];
