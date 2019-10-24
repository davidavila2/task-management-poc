import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

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
    return this.httpClient.post<{accessToken: string}>(this.getUrlForSignIn(), user).pipe(
      tap(res => { localStorage.setItem('accessToken', res.accessToken) }),
      tap(() => this.router.navigate(['/tasks']))
    )
  }

  signUp(user: User) {
    return this.httpClient.post(this.getUrlForSignUp(), user)
  }

  getToken(accessToken: string) {
    return localStorage.getItem(accessToken);
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
