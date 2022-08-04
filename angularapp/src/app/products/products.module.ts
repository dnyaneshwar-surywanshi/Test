import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaptopComponent } from './laptop/laptop.component';
import { TabletComponent } from './tablet/tablet.component';
import { TvComponent } from './tv/tv.component';
import { WashingmachineComponent } from './washingmachine/washingmachine.component';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductrouteComponent } from './productroute/productroute.component';

const prodRoutes: Routes = [
  {path: '', component: ProductsComponent, children: [  
    {path: 'laptop', component: LaptopComponent},
    {path: 'tablet', component: TabletComponent},
    {path: 'tv', component: TvComponent},
    {path: 'washingmachine', component: WashingmachineComponent}
  ]},
]

@NgModule({
  declarations: [
    LaptopComponent,
    TabletComponent,
    TvComponent,
    WashingmachineComponent,
    ProductsComponent,
    ProductrouteComponent
  ],
  imports: [
    CommonModule,
   RouterModule.forChild(prodRoutes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { 
  
  constructor() {
    console.log('ProductsModule constructor called')
  }
}
