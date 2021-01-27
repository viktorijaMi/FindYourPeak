import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { LoginStatusComponent } from './components/login-status/login-status.component';


@NgModule({
  declarations: [
    LoginComponent,
    LoginStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule
  ],
  exports: [
    LoginStatusComponent,
    LoginComponent
  ]
})
export class AuthModule {
}
