import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  {
    path:'customers' ,
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path:'orders' ,
    loadChildren: './orders/orders.module#OrdersModule',
    canActivate:[AuthenticationGuard]
  },
  {
    path:'',
    redirectTo: '',
    pathMatch: 'full'

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
