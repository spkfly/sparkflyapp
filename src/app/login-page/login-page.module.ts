import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPagePageRoutingModule } from './login-page-routing.module';

import { LoginPagePage } from './login-page.page';

import { HttpClient } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPagePageRoutingModule
  ],
  declarations: [LoginPagePage],
})

export class LoginPagePageModule {
  constructor(private httpClient : HttpClient){}
  handle:string;
  password:string;
  
  private getUserProfileImg(handle:string,password:string) {
    console.log(handle,password);
    this.httpClient.get('https://sparkfly.us/api/v0/usr/'+handle+'/'+Md5.hashStr(password)+'/profileimg');
  }
}
