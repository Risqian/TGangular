import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //Manggil API
  uri = 'http://localhost:5000/api/v1';

  constructor(private http: HttpClient) { }

  addUser(first_name, last_name, email, password) {
    const obj = {
      first_name,
      last_name,
      email,
      password
    };
    console.log(obj);
    this
      .http
      .post(`${this.uri}/auth/signup`, obj)
      .subscribe(res => console.log('Data berhasil dimasukkan')
      );
  }

  getUser() {
    return this
    .http
    .get<User[]>(`${this.uri}/users`);
  }

  getUserId(id) {
    return this
      .http
      .get(`${this.uri}/user/${id}`);
  }
}
