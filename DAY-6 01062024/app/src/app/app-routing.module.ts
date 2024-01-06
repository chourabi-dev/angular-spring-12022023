import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';

const routes: Routes = [
  { path:'promise', component:PromiseDemoComponent },
  { path:'observable', component:ObservableDemoComponent },
  { path:'users', component:UsersPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
