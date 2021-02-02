import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { RestService } from '../services/rest-service/rest.service';
//import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  login_form: FormGroup;
  http: any;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    //private activatedRoute: ActivatedRoute,
    public httpClient: HttpClient,
    public restService: RestService
  ) { }

  ngOnInit() {
    this.login_form = this.formBuilder.group({
      handle: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  loginSubmitClick() {
    let handle = (<HTMLInputElement>document.getElementById("handle-input")).value;
    let password = (<HTMLInputElement>document.getElementById("password-input")).value;
    console.log(handle, password);
    this.restService.login(handle,password);
  }

  onSubmit(values) {
    console.log(values);
  }
  
  
  sendGetRequest() {
    console.log('get request function');
  }

}
