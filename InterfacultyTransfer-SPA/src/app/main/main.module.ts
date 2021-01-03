import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {RouterModule} from '@angular/router';
import {MainRoutes} from './main.routes';
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzDividerModule} from 'ng-zorro-antd/divider';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzWaveModule} from 'ng-zorro-antd/core/wave';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import {NzTagModule} from 'ng-zorro-antd/tag';
import {KatexModule} from 'ng-katex';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(MainRoutes),
    NzCardModule,
    NzDividerModule,
    NzTableModule,
    NzWaveModule,
    NzButtonModule,
    NzDropDownModule,
    NzTagModule,
    KatexModule,
    NzIconModule,
    FormsModule
  ]
})
export class MainModule {
}
