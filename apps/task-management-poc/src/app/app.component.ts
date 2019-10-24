import { Component } from "@angular/core";
import { UserService } from '@task-management-poc/core-data';

@Component({
  selector: "task-management-poc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Task Management POC";

  links = [
    { path: '/tasks', icon: 'home', title: 'Tasks' },
    { path: '/login', icon: 'account_circle', title: 'Login'}
  ];

  constructor(public userService: UserService) {}
}
