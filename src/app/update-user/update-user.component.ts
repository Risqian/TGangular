import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styles: [
  ]
})
export class UpdateUserComponent implements OnInit {

  users: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private us: UserService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.us.getUserId(params[`id`]).subscribe(res => {
        this.users = res;
        console.log(` Usernya : ${this.users}`);
      });
    });
  }

}
