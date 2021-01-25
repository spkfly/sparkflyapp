import { Component } from '@angular/core';
import { UserService } from '../services/user-service/user.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private user: UserService) {}

  description = this.user.description;
  firstname = this.user.firstName;
  lastname = this.user.lastName;
  photoUrl = this.user.photo;

}
