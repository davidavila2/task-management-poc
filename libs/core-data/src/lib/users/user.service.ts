import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

const SIGN_IN = 'http://localhost:3000/auth/signin';
const SIGN_UP = 'http://localhost:3000/auth/signup';
@Injectable({
  providedIn: 'root'
})
  
export class UserService {
  authenticatedUser$ = new BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  signIn(user: User) {
    return this.httpClient.post(this.getUrlForSignIn(), user)
  }

  signUp(user: User) {
    return this.httpClient.post(this.getUrlForSignUp(), user)
  }

  getToken() {
    console.log('my Token', )
    return localStorage.getItem('token')
  }

  setToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
    this.authenticatedUser$.next(accessToken !== '');
  }

  logout() {
    this.setToken('');
    this.router.navigate(['/login']);
  }

  private getUrlForSignIn() {
    return `${SIGN_IN}`;
  }

  private getUrlForSignUp() {
    return SIGN_UP;
  }
}
