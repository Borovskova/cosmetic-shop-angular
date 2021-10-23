import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { LoginNotifierComponent } from '../login-notifier/login-notifier.component';
import { AuthComponent } from './auth/auth.component';




const routes: Routes = [
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', redirectTo: 'signup', pathMatch: 'full' },
      { path: 'signup', component: SignUpComponent },
    ]
  },
  {path: '', redirectTo: 'auth', pathMatch: 'full' },
  //{ path: 'signup', children: [ { path: 'signup', component: SignUpComponent },{ path: '',  component: SignUpComponent },]},
  { path: 'login-notifier', component: AuthComponent, children: [ { path: 'login-notifier', component: LoginNotifierComponent },  { path: '', component: LoginNotifierComponent }]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
