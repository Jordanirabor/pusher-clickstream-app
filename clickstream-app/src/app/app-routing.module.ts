
import { BurgerComponent } from './burger/burger.component';
import { ChipsComponent } from './chips/chips.component';
import { AdminComponent } from './admin/admin.component'; // add this
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// update this
const routes: Routes = [
  {
    path: 'burger', component: BurgerComponent,
  },
  {
    path: 'chips', component: ChipsComponent,
  },
  {
    path: 'admin', component: AdminComponent,
  },
  {
    path: '**', redirectTo: 'burger'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }