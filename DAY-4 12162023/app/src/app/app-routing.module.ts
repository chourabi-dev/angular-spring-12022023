import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { TeamComponent } from './pages/team/team.component';
import { CompanyComponent } from './pages/company/company.component';
import { EmployeeDetailsComponent } from './pages/employee-details/employee-details.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {  path:'', redirectTo:'home', pathMatch:'full' },
  {  path:'home', component:HomePageComponent},
  {  path:'account', component:AccountPageComponent ,
   canActivate:[AuthGuard] },
  
  {  path:'about', component:AboutPageComponent, children:[
    { path:'team', component:TeamComponent },
    { path:'company', component:CompanyComponent },
    
  ]},
  {  path:'profile', component:ProfilePageComponent},
  {  path:'employee/details/:id', component:EmployeeDetailsComponent},
  

  /** wild card !! */
   { path:'**' , component:NotFoundPageComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
