import { Component, OnInit } from '@angular/core';

import User from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styles: [
  ]
})
export class GetUserComponent implements OnInit {

  users : User[];

  constructor(
    private us : UserService
  ) { }

  ngOnInit(): void {
    this.us.getUser().subscribe((data:User[]) => {
      this.users = data;
    })
  }

}
