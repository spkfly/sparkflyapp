import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RestService } from '../services/rest-service/rest.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  login_form: FormGroup;
  api_data: string;
  http: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public httpClient: HttpClient,
    public restService: RestService
  ) 
  { 
    this.api_data='';
  }

  // Fires only the first time the page is loaded
  ngOnInit() {
    this.login_form = this.formBuilder.group({
      handle: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  /* Fires each time the page is loaded
  ionViewDidEnter() {
    
  } */

  btnClick() {
    let handle = (<HTMLInputElement>document.getElementById("handle-input")).value;
    let password = (<HTMLInputElement>document.getElementById("password-input")).value;
    console.log(handle, password);
    this.restService.validateLogin(handle,password);
  }

  onSubmit(values) {
    console.log(values);
    //this.router.navigate(["/tab1"]); //temporarily routes to home page
  }
  
  
  sendGetRequest() {
    console.log('get request function');
  }

}
