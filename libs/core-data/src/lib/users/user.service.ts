import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

const SIGN_IN = 'http://task-management-poc.us-west-1.elasticbeanstalk.com/auth/signin';
const SIGN_UP = 'http://task-management-poc.us-west-1.elasticbeanstalk.com/auth/signup';
@Injectable({
  providedIn: 'root'
})
  
export class UserService {
  // accessToken: string;
  IsAuthenticated$ = new BehaviorSubject(false);

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { 
    this.setToken(this.getToken() || '')
  }

  logIn(user: User) {
    return this.httpClient.post<{accessToken: string}>(this.getUrlForSignIn(), user).pipe(
      tap(res => { this.setToken(res.accessToken) }),
      tap(() => this.router.navigate(['/tasks']))
    )
  }

  signUp(user: User) {
    return this.httpClient.post(this.getUrlForSignUp(), user)
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  setToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
    this.IsAuthenticated$.next(accessToken !== '');
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
