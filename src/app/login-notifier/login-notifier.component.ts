import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-notifier',
  templateUrl: './login-notifier.component.html',
  styleUrls: ['./login-notifier.component.css']
})
export class LoginNotifierComponent implements OnInit {
title:string = 'Unauthorized!';
message:string = 'This email adress is unauthorized. If you want signup go to tab "signup".';

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  
}
