import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, NgForm, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  registerUserData: any = {};
  loginUserData: any = {};


  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  signupForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    passwordConfirm: new FormControl(null, [Validators.required, Validators.minLength(8)]),
  });

  isWarnEmailVisible: boolean = false;
  isWarnPasswordVisible: boolean = false;
  isWarnPasswordConfirmVisible: boolean = false;
  isWarnDiferentPasswordVisible: boolean = false;

  returnUrl: string;
  passwordErrorText: string = 'Password must contain at least 8 characters';
  emailErrorText: string = 'Incorrect Email';




  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
    this.auth.itemSignupMenuValue = 'Login';
    this.auth.isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === "true" ? true : false;
    this.loginUserData.password = localStorage.getItem('password');
    this.loginUserData.email = localStorage.getItem('email');
  }


  showWarnEmail() {
    if (!this.signupForm.controls.email.valid) {
      this.isWarnEmailVisible = true;
    } else {

    }
  }

  showWarnPassword() {
    if (!this.signupForm.controls.password.valid) {
      this.isWarnPasswordVisible = true;
    } else if (!this.signupForm.controls.passwordConfirm.valid) {
      this.isWarnPasswordConfirmVisible = true;
    }
    else {
      this.isWarnPasswordVisible = false;
      this.isWarnPasswordConfirmVisible = false;
    }
  }

  login() {
    console.log('work');
    this.auth.loginUser(this.loginUserData)
      .subscribe(
        response => {
          console.log(response);
          this.auth.itemSignupMenuValue = 'Logout';
          this.auth.isUserLoggedIn = true;
          console.log( this.auth.isUserLoggedIn);
           localStorage.setItem('isUserLoggedIn', "true");
          localStorage.setItem('password', this.loginUserData.password);
          localStorage.setItem('email', this.loginUserData.email);
          localStorage.setItem('itemSignupMenuValue', 'Logout');
          this.router.navigate(['dashboard'])
        },
        error => {
          console.log('error' + error);
          this.auth.isNotifierVisible = true;
        }
      )  
  }

  logout() {
    this.auth.isUserLoggedIn = false;
    this.auth.itemSignupMenuValue = 'Login';
    // localStorage.setItem('isUserLoggedIn', "false");
    localStorage.setItem('password', '');
    localStorage.setItem('email', '');
    localStorage.setItem('itemSignupMenuValue', 'Login');
  }

  signup() {
    if (this.registerUserData.password !== this.registerUserData.passwordConfirm) {
      this.isWarnDiferentPasswordVisible = true;
    } else if (this.registerUserData.password === this.registerUserData.passwordConfirm) {
      this.isWarnDiferentPasswordVisible = false;

      this.auth.registerUser(this.registerUserData)
        .subscribe(
          response => {
            console.log(response);

          },
          error => {
            console.log(error);
          }
        )
    }
  }
  onChangeEmailInput() {
    this.showWarnEmail();
  }
  onChangePasswordInput() {
    this.showWarnPassword();
  }
}
