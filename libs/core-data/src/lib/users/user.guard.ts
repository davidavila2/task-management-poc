import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard {

  constructor(public userService: UserService, public router: Router) { }

  // canActivate(): boolean {
  //   if (!this.userService.authenticatedUser$.value) {
  //     this.router.navigate(['/login'])
  //     return false;
  //   }
  //   return true;
  // }

}
