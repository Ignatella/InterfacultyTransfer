import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlgorithmsComponent} from './algorithms.component';
import {RouterModule} from '@angular/router';
import {AlgorithmsRoutes} from './algorithms.routes';
import {HomeComponent} from './components/home/home.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzIconModule} from 'ng-zorro-antd/icon';
import { NzTreeModule } from 'ng-zorro-antd/tree';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import {NzCardModule} from 'ng-zorro-antd/card';

@NgModule({
  declarations: [
    AlgorithmsComponent,
    HomeComponent,
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AlgorithmsRoutes),
    NzLayoutModule,
    NzIconModule,
    NzTreeModule,
    NzCardModule
  ]
})
export class AlgorithmsModule {
}
