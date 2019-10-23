import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService, User } from '@task-management-poc/core-data';

@Component({
  selector: 'task-management-poc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    console.log('lgo', this.form.value);
    if (this.form.invalid) return;
    this.userService.signIn(this.form.value)
  }

  signUp() {
    console.log('lgo', this.form.value);
    if (this.form.invalid) return;
    this.userService.signUp(this.form.value).subscribe()
  }

  private initForm() {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    }, { updateOn: 'submit' })
  }

}
