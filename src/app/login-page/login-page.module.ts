import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPagePageRoutingModule } from './login-page-routing.module';
import { LoginPagePage } from './login-page.page';

import { HttpClient } from '@angular/common/http';
import {Md5} from 'ts-md5/dist/md5';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    //LoginPagePageRoutingModule
  ],
  declarations: [LoginPagePage]
})

export class LoginPagePageModule {}
