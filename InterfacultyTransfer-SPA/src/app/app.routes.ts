import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./main/main.module').then((m) => m.MainModule),
  },
  {
    path: 'algorithms',
    loadChildren: () =>
      import('./algorithms/algorithms.module').then((m) => m.AlgorithmsModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
