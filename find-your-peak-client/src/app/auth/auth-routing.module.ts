import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent
} from '@okta/okta-angular';

import myAppConfig from 'src/app/config/my-app-config';

const oktaConfig = Object.assign({
  onAuthRequired: (injector) => {
    const router = injector.get(Router);

    router.navigate(['/login']);

  }
}, myAppConfig.oidc);

const routes: Routes = [
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    OktaAuthModule
  ],
  providers: [ 
    { provide: OKTA_CONFIG, useValue: oktaConfig }
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
