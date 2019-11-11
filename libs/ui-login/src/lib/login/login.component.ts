import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService, User } from '@task-management-poc/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'task-management-poc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logIn: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    if (this.logIn.invalid) return;
    this.userService.logIn(this.logIn.value).subscribe();
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }

  private initForm() {
    this.logIn = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    }, { updateOn: 'submit' })
  }

}
