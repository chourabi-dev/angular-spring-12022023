import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiculeRoutingModule } from './vehicule-routing.module';
import { VehiculeComponent } from './vehicule.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    VehiculeComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    VehiculeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class VehiculeModule { }
