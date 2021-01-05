import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5'
import { stringify } from 'querystring';

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
    public httpClient: HttpClient
  ) { this.api_data=''; }

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
    let handle = document.getElementById("handle-input").toString();
    let password = document.getElementById("password-input").toString();
    this.getUserDescription(handle, password);
  }

  onSubmit(values) {
    console.log(values);
    //this.router.navigate(["/tab1"]); //temporarily routes to home page
  }
  
  
  sendGetRequest() {
    console.log('get request function');
  }

  getUserDescription(handle:string,password:string) {
    console.log(handle, password);
    const description = this.httpClient.get('https://sparkfly.us/api/v0/usr/'+handle+'/'+Md5.hashStr(password)+'/description');
    console.log(description);
  }

}
