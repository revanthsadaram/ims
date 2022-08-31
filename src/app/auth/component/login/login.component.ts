import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  goToNextPage($pageName:string = ''): void {
    const navigationDetails: string[] = ['/logout'];
    if ($pageName.length) {
      navigationDetails.push($pageName);
    }
    this.router.navigate(navigationDetails);
  }

  goToRegisterPage($pageName:string = ''): void {
    const navigationDetails: string[] = ['/register'];
    if ($pageName.length) {
      navigationDetails.push($pageName);
    }
    this.router.navigate(navigationDetails);
  }

  ngOnInit(): void {
  }

  onLogin(loginForm: { value: any; }) {
    console.log(loginForm.value);
    const user = this.authService.authUser(loginForm.value);
    if(user) {
      console.log("login successful")
    } else {
      console.log("login not successful")
    }
  }

  loginForms = new FormGroup({
    email: new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    pwd: new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10)
    ])
  })

  loginSubmitted(){
    console.log(this.loginForms.value);
  }

  get Email(): FormControl {
    return this.loginForms.get("email") as FormControl
  }
  get PWD(): FormControl {
    return this.loginForms.get("pwd") as FormControl
  }

}
