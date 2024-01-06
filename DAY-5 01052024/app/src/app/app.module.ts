import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { NavbarComponent } from './componenets/navbar/navbar.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeesPageComponent } from './pages/employees-page/employees-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    CartPageComponent,
    NavbarComponent,
    AddEmployeeComponent,
    EmployeesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
