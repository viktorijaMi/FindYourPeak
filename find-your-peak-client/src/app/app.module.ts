import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ActivityModule, ActivityRoutingModule } from './activity/index';
import { AuthModule, AuthRoutingModule } from './auth/index';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    ActivityModule,
    ActivityRoutingModule,
    AuthModule,
    AuthRoutingModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
