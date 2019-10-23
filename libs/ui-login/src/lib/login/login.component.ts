import { Component, OnInit } from '@angular/core';
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
    console.log('lgo', this.logIn.value);
    if (this.logIn.invalid) return;
    this.userService.signIn(this.logIn.value).subscribe()
  }

  goToSignup() {
    // tslint:disable-next-line: no-unused-expression
    this.router.navigate(['/signup']);
  }

  private initForm() {
    this.logIn = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    }, { updateOn: 'submit' })
  }

}
