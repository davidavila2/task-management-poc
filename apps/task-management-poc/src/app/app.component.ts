import { Component } from "@angular/core";

@Component({
  selector: "task-management-poc-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "Task Management POC";

  links = [
    { path: '/tasks', icon: 'home', title: 'Tasks' },
  ];
}
