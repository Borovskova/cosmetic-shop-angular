import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { AuthService } from '../auth.service';
import { LoginNotifierComponent } from '../login-notifier/login-notifier.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth/auth.component';




@NgModule({
  declarations: [
    SignUpComponent,
    LoginNotifierComponent,
    AuthComponent,
  ],

  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    LayoutModule,
  ],

  providers: [AuthService,]
})
export class AuthModule { }
