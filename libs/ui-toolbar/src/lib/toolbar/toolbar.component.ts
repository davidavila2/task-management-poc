import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { UserService } from '@task-management-poc/core-data';

@Component({
  selector: 'ui-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Input() title: string;
  @Input() sidenav: MatSidenav;
  @Input() userAuthenticated: boolean;

  constructor(private userService: UserService) { }

  logout() {
    this.userService.logout();
  }

}
