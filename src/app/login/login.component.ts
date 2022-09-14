import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private _loginService: LoginService, 
    private router: Router) {}

  ngOnInit(): void {}

  submit() {
    console.log(this.loginForm.value);
    this._loginService.login(this.loginForm.value).subscribe(
      (data: any) => {
        alert('login succsfullyyy');
        sessionStorage.setItem('my-app-token', data.token);
        this.router.navigateByUrl('/dashboard');
      },
      (err: any) => {
        alert('invalid details');
      }
    );
  }
}
