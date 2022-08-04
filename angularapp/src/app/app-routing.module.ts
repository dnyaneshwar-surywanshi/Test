import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';



const routes: Routes = [
  
  {path:'aboutus', component: AboutusComponent},
   {path:'product', loadChildren: './products/products.module#ProductsModule'},
  // {
  //   path: 'product',
  //   loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  // },
  {path: 'contactus', component: ContactusComponent}
  
];

@NgModule({
   imports: [RouterModule.forRoot(routes, {
     preloadingStrategy: PreloadAllModules
   })],
   exports: [RouterModule]
})
export class AppRoutingModule { }
