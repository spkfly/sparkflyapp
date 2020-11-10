import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { SignUpPageRoutingModule } from './sign-up-routing.module';
import { SignUpPage } from './sign-up.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    //SignUpPageRoutingModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}