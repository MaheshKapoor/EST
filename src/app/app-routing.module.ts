import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Link1Component } from  './link1/link1.component';
import { Link2Component } from  './link2/link2.component';
import { Link3Component } from  './link3/link3.component';
import { Link4Component } from  './link4/link4.component';
import { Link5Component } from  './link5/link5.component';

const routes: Routes = [
  {
    path:  'link1',
    component:  Link1Component
  },
  {
    path:  'link2',
    component:  Link2Component
  },
  {
    path:  'link3',
    component:  Link3Component
  },
  {
    path:  'link4',
    component:  Link4Component
  },
  {
    path:  'link5',
    component:  Link5Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
