import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validator } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private us: UserService,
    private routes: Router
  ) {
    this.createForm();
  }

  createForm() {
    this.addForm = this.fb.group({
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    })
  }

  addUser(first_name, last_name, email, password) {
    this.us.addUser(first_name, last_name, email, password);
    this.routes.navigate(['users'])
  }

  //Save Data
  onSubmit() {
    let request: any;
    const controls = this.addForm.controls;

    //Checking Form
    if (this.addForm.invalid) {
      Object.keys(controls).forEach((controlName) => controls[controlName].markAsTouched());
      return;
    }

    this.addUser(
      controls.first_name.value,
      controls.last_name.value,
      controls.email.value,
      controls.password.value
    );
    this.routes.navigate(['users'])

    console.log('data masuk')
  }

  ngOnInit(): void {
  }

}
