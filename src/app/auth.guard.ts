import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(public auth: AuthService, public router: Router) {

  }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    this.auth.isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === "true" ? true : false;
    console.log(this.auth.isUserLoggedIn);  
    if (!this.auth.isUserLoggedIn) {
      console.log(this.auth.isUserLoggedIn + ' from if');    
      this.router.navigate(['auth']);
      return false;
    } else {
      //this.router.navigate(['dashboard']);
      console.log(this.auth.isUserLoggedIn + ' from else');
      return true;

    }
  }
}

