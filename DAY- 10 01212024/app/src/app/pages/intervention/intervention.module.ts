import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterventionRoutingModule } from './intervention-routing.module';
import { InterventionComponent } from './intervention.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    InterventionComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    InterventionRoutingModule,
    HttpClientModule
  ]
})
export class InterventionModule { }
