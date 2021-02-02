import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Md5 } from 'ts-md5/dist/md5';
import { UserService } from '../user-service/user.service';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})

export class RestService {

  //authState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    public user: UserService,
    private router: Router,
    //private storage: Storage,
    //private platform: Platform
    ) {}
    /*{ 
      this.platform.ready().then(() => {
        this.isLoggedIn();
      });
    }*/

  login(handle, password) {
    this.http.get('https://sparkfly.us/api/v0/usr/'+handle+'/'+Md5.hashStr(password)+'/userinfo')
    .subscribe(data => {
      console.log('response: ', data);
      if (data["error"] === 'ok') {
        this.user.handle = handle;
        this.user.password = password;
        this.user.description = data["description"];
        this.user.photo = data["photo_url"];
        this.user.firstName = data["firstname"];
        this.user.lastName = data["lastname"];
        this.router.navigate(['/tabs/tabs/tab1']);
        /*
        var info = {
          user_handle: this.user.handle,
          user_password: this.user.password,
          user_description: this.user.description,
          user_photo: this.user.photo,
          user_firstname: this.user.firstName,
          user_lastname: this.user.lastName
        };
        
        this.storage.set('user-info', info).then((response) => {
          this.router.navigate(['tabs']);
          this.authState.next(true);
        });
        */
      }
      else {
        alert('Incorrect username or password');
        
      }
    });
  }
/*
  logout() {
    this.storage.remove('user-info').then(() => {
      this.router.navigate(['account-ui']);
      this.authState.next(false);
    });
  }

  isLoggedIn() {
    this.storage.get('user-info').then((response) => {
      if (response) {
        this.authState.next(true);
      }
    });
  }

  isAuthenticated() {
    return this.authState.value;
  }
*/

/* EDIT PROFILE FUNCTIONS */
changePass(current_pass, updated_pass) {
  
}

}
