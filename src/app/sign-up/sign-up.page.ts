import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../validators/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

export class SignUpPage implements OnInit {
  signup_form: FormGroup;
  matching_passwords_group: FormGroup;

  genders: Array<string>;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.genders = [
      "Male",
      "Female"
    ];
    
    this.matching_passwords_group = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_-]+$') //required: one uppercase, one lowercase, one number, can include underscore/hyphen
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    this.signup_form = this.formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      gender: new FormControl(this.genders[0], Validators.required),
      matching_passwords: this.matching_passwords_group,
      terms: new FormControl(true, Validators.pattern('true'))
    });
  }

  validation_messages = {
    'firstName': [
      {type: 'required', message: 'Required'}
    ],
    'lastName': [
      {type: 'required', message: 'Required'}
    ],
    'email': [
      {type: 'required', message: 'Required'},
      {type: 'pattern', message: 'Please enter a valid email'}
    ],
    'password': [
      {type: 'required', message: 'Required'},
      {type: 'minlength', message: 'Must be at least 6 characters long'},
      {type: 'pattern', message: 'Must contains at least one uppercase letter, one lowercase letter, and one number'}
    ],
    'confirm_password': [
      {type: 'required', message: 'Re-type password'}
    ],
    'matching_passwords': [
      {type: 'areEqual', message: 'Passwords must match'}
    ],
    'terms': [
      {type: 'pattern', message: 'You must accept the terms and conditions'}
    ],
  };

  onSubmit(values) {
    console.log(values);
    this.router.navigate(["/tab1"]); //temporarily routes to home page
  }

}