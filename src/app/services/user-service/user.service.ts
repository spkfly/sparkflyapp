import { Injectable } from '@angular/core';
import { RestService } from '../rest-service/rest.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor() { }

  private _handle: string;
  private _password: string;
  private _firstName: string;
  private _lastName: string;
  private _photo: string;
  private _description: string;
  accessToken?: string;

  get handle() {
    return this._handle;
  }

  set handle(handle: string) {
    this._handle = handle;
  }

  get password() {
    return this._password;
  }

  set password(pass: string) {
    this._password = pass;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(name: string) {
    this._firstName = name;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(name: string) {
    this._lastName = name;
  }

  get photo() {
    return this._photo;
  }

  set photo(pic: string) {
    this._photo = pic;
  }

  get description() {
    return this._description;
  }

  set description(des: string) {
    this._description = des;
  }

}
