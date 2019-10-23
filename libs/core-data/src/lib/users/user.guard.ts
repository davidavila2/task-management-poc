import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(public userService: UserService, public router: Router) { }

  canActivate(): boolean {
    if (!this.userService.authenticatedUser$.value) {
      this.router.navigate(['/login'])
      return false;
    }
    return true;
  }

}
