import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from "../app/dropdown/dropdown.component";
import { Dropdown2Component } from './dropdown2/dropdown2.component';
const routes: Routes = [
  
  //{ path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
{path:'drop' ,component:DropdownComponent},
{path:'drop1',component:Dropdown2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
