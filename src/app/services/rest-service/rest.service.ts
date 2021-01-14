import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';
import { UserService } from '../user-service/user.service';


@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient,
    public user: UserService) { }

  validateLogin(handle, password) {
    this.http.get('https://sparkfly.us/api/v0/usr/'+handle+'/'+Md5.hashStr(password)+'/description')
    .subscribe(data => {
      console.log('response: ', data);
      if (data["error"] === 'ok') {
        console.log('good');
        this.user.description = data["description"];
        this.user.photo = data["photo_url"];
        this.user.firstName = data["firstname"];
        this.user.lastName = data["lastname"];
      }
      else {
        console.log('bad');
        alert('Incorrect username or password');
        
      }
    })
  }


}
