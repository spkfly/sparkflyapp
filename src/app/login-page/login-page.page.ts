import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  login_form: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    public httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.login_form = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit(values) {
    console.log(values);
    this.router.navigate(["/tab1"]); //temporarily routes to home page
  }
  /*
  sendGetRequest() {
    this.http.get()
  }
  */
  private getUserProfileImg(handle:string,password:string) {
    console.log(handle,password);
    this.httpClient.get('https://sparkfly.us/api/v0/usr/'+handle+'/'+Md5.hashStr(password)+'/profileimg');
  }

}
