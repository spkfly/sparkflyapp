import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountUiPage } from './account-ui.page';

const routes: Routes = [
  {
    path: '',
    component: AccountUiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountUiPageRoutingModule {}
