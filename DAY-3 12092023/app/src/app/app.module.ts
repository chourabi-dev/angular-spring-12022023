import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompOneComponent } from './compnenets/comp-one/comp-one.component';
import { CompTwoComponent } from './compnenets/comp-two/comp-two.component';
import { MydatePipe } from './mydate.pipe';
import { EmailPipe } from './email.pipe';
import { ShoppinListComponent } from './shoppin-list/shoppin-list.component';
import { LikeButtonComponent } from './like-button/like-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CompOneComponent,
    CompTwoComponent,
    MydatePipe,
    EmailPipe,
    ShoppinListComponent,
    LikeButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
