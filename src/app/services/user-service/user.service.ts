import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  constructor() { }

  private _handle: string;
  private _firstName: string;
  private _lastName: string;
  private _description: string;

  get handle() {
    return this._handle;
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

  get description() {
    return this._description;
  }

  set description(des: string) {
    this._description = des;
  }


}
