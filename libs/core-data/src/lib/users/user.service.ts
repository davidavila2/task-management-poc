import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

const SIGN_IN = 'http://localhost:3000/auth/signin';
const SIGN_UP = 'http://localhost:3000/auth/signup';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  signIn(user: User) {
    return this.httpClient.post(this.getUrlForSignIn(), user)
  }

  signUp(user: User) {
    return this.httpClient.post(this.getUrlForSignUp(), user)
  }

  private getUrlForSignIn() {
    return `${SIGN_IN}`;
  }

  private getUrlForSignUp() {
    return SIGN_UP;
  }
}
