import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { AuthService } from './services/auth.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
