import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParcComponent } from './parc.component';
import { ListPageComponent } from './list-page/list-page.component';
import { AddPageComponent } from './add-page/add-page.component';

const routes: Routes = [
  { path: '', component: ListPageComponent },
  { path: 'add', component: AddPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcRoutingModule { }
