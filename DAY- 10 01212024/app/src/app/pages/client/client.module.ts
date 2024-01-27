import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { AddPageComponent } from './add-page/add-page.component';
import { ListPageComponent } from './list-page/list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddInterventionComponent } from './add-intervention/add-intervention.component';


@NgModule({
  declarations: [
    ClientComponent,
    AddPageComponent,
    ListPageComponent,
    AddInterventionComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ClientModule { }
