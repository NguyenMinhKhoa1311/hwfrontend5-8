import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren:()=> import('./pages/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'cart',
    loadChildren:()=> import('./pages/cart/cart.module').then(m=>m.CartModule),
    pathMatch: 'full'
  },
  {
    path: 'admin',
    loadChildren:()=> import('./pages/admin/admin.module').then(m=>m.AdminModule),
    pathMatch: 'full'
  },
  {
    path:'**',
    redirectTo: 'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
