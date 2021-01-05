import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlgorithmsComponent} from './algorithms.component';
import {RouterModule} from '@angular/router';
import {AlgorithmsRoutes} from './algorithms.routes';
import {HomeComponent} from './components/home/home.component';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTreeModule} from 'ng-zorro-antd/tree';
import {LeftMenuComponent} from './components/left-menu/left-menu.component';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NodeCodeComponent} from './components/node-code/node-code.component';
import {SharedModule} from '../shared/shared.module';
import {OverviewComponent} from './components/overview/overview.component';
import {NodeDescriptionComponent} from './components/node-description/node-description.component';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {KatexModule} from 'ng-katex';
import {NzStepsModule} from 'ng-zorro-antd/steps';
import {MarkdownModule} from 'ngx-markdown';

@NgModule({
  declarations: [
    AlgorithmsComponent,
    HomeComponent,
    LeftMenuComponent,
    NodeCodeComponent,
    OverviewComponent,
    NodeDescriptionComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AlgorithmsRoutes),
    NzLayoutModule,
    NzIconModule,
    NzTreeModule,
    NzCardModule,
    NzMenuModule,
    SharedModule,
    NzDividerModule,
    NzTagModule,
    KatexModule,
    NzStepsModule,
    MarkdownModule.forChild(),
  ]
})
export class AlgorithmsModule {
}
