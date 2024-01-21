import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParcRoutingModule } from './parc-routing.module';
import { ParcComponent } from './parc.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPageComponent } from './add-page/add-page.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ParcComponent,
    ListPageComponent,
    AddPageComponent
  ],
  imports: [
    CommonModule,
    ParcRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ParcModule { }
