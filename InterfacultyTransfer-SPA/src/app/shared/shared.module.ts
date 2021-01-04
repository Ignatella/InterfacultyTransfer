import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavComponent} from './components/nav/nav.component';
import {RouterModule} from '@angular/router';
import {SafePipe} from './pipes/safe/safe.pipe';


@NgModule({
  declarations: [NavComponent, SafePipe],
  exports: [
    NavComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule {
}
