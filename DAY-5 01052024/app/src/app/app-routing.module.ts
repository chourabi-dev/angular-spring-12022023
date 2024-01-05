import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';

const routes: Routes = [
  { path:'', redirectTo:'products', pathMatch:'full' },
  { path:'products', component:ProductPageComponent },
  { path:'cart', component:CartPageComponent },


  // app 2
  { path:'add-employee', component:AddEmployeeComponent },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
