import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-body-care',
  templateUrl: './body-care.component.html',
  styleUrls: ['./body-care.component.css']
})
export class BodyCareComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
