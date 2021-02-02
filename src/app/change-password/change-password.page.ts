import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest-service/rest.service';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  constructor(
    private router: Router,
    private user: UserService,
    private restService: RestService
  ) { }

  ngOnInit() {
  }

  newPassClick() {
    let current_pass = (<HTMLInputElement>document.getElementById("current-pass")).value;
    let new_pass = (<HTMLInputElement>document.getElementById("new-pass")).value;
    let confirm_pass = (<HTMLInputElement>document.getElementById("confirm-new-pass")).value;
    
  }

}
