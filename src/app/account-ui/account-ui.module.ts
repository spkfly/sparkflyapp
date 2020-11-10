import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountUiPageRoutingModule } from './account-ui-routing.module';

import { AccountUiPage } from './account-ui.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccountUiPageRoutingModule
  ],
  declarations: [AccountUiPage]
})
export class AccountUiPageModule {}
