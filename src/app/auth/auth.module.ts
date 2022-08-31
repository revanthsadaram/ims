import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './component/logout/logout.component';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
