import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainpageComponent} from './mainpage/mainpage.component';
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '**',
    component: MainpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
