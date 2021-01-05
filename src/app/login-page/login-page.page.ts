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

  ngOnInit() {
    this.login_form = this.formBuilder.group({
      handle: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    //document.getElementById('login-submit').addEventListener("click", function(){ getUserDescription(handle,password); });
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
    JSON.stringify(description);
    console.log(description);
  }

}
