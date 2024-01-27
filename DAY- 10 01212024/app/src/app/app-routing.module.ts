import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  

  { path: 'parc', loadChildren: () => import('./pages/parc/parc.module').then(m => m.ParcModule) },
  { path: 'client', loadChildren: () => import('./pages/client/client.module').then(m => m.ClientModule) },
  { path: 'vehicule', loadChildren: () => import('./pages/vehicule/vehicule.module').then(m => m.VehiculeModule) },
  { path: 'interventions', loadChildren: () => import('./pages/intervention/intervention.module').then(m => m.InterventionModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
