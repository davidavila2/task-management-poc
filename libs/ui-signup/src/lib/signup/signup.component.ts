import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '@task-management-poc/core-data';
import { Router } from '@angular/router';

@Component({
  selector: 'task-management-poc-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.initForm();
  }

  signUp() {
    console.log('lgo', this.signup.value);
    if (this.signup.invalid) return;
    this.userService.signUp(this.signup.value).subscribe();
    this.router.navigate(['/login']);
  }

  goToLogin() {
    console.log('click');
    this.router.navigate(['/login'])
  }

  private initForm() {
    this.signup = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    }, { updateOn: 'submit' })
  }

}
