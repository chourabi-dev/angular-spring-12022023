import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';

import { HttpClientModule } from '@angular/common/http';
import { UsersPageComponent } from './pages/users-page/users-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PromiseDemoComponent,
    ObservableDemoComponent,
    UsersPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
