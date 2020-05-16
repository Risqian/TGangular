import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import Components
import {GetUserComponent} from './get-user/get-user.component';
import {AddUserComponent} from './add-user/add-user.component';
import {UpdateUserComponent} from './update-user/update-user.component';


const routes: Routes = [
  {
    path: 'users',
    component: GetUserComponent
  },
  {
    path: 'addUser',
    component: AddUserComponent
  },
  {
    path: 'editUser/:id',
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
