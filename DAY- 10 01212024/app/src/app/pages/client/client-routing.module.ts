import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ListPageComponent } from './list-page/list-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { AddInterventionComponent } from './add-intervention/add-intervention.component';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path:'add', component:AddPageComponent },
  { path:'add-intervention/:id', component:AddInterventionComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
