import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  validateLogin(handle, password) {
    
  }

  getUserDescription(handle) {
    return this.http.get('api-here/' + handle)
    .subscribe(data => {
      console.log('response: ', data);
    })
  }

}
