import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _registerUrl = "http://localhost:3001/api/register";
  private _loginrUrl = "http://localhost:3001/api/login";
  //userName:string;
  isNotifierVisible: boolean = false;
  itemSignupMenuValue: any = 'Login';
  isUserLoggedIn: boolean = false;

  constructor(private http: HttpClient, public router: Router) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginrUrl, user)
  }
  notifierHidden() {
    this.isNotifierVisible = false;
  }
}

