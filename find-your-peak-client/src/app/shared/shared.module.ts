import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from '../auth/index';



@NgModule({
  declarations:
    [
      HeaderComponent,
    ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    AuthModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HeaderComponent
  ]
})
export class SharedModule {
}
