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
      if (data.error === 'ok') {
        console.log('good');
        this.user.description = data.description;
      }
      else {
        console.log('bad');
        alert('Incorrect username or password');
        
      }
    })
  }

  getUserDescription() {
    return this.http.get('https://sparkfly.us/api/v0/usr/neil/25d55ad283aa400af464c76d713c07ad/description')
    .subscribe(data => {
      console.log('response: ', data);
    })
  }

  /*
  console.log(handle, password);
    // ${Variable}
    this.description = this.httpClient.get('https://sparkfly.us/api/v0/usr/neil/25d55ad283aa400af464c76d713c07ad/description');
    this.description.subscribe(data => {
      console.log('data: ', data);
    })
    console.log(this.description);
    */
}
