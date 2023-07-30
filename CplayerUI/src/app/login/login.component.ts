import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterService } from '../router.service';
import { AuthenticationService } from '../authentication.service';
import { UserAuth } from '../userAuth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userAuth: UserAuth = new UserAuth();
  loginflag: boolean;
  incorrect: boolean;
  constructor (private route: RouterService, private auth: AuthenticationService) {  }
  ngOnInit(): void {
    if (sessionStorage.getItem('token') != null) {
      this.loginflag = true;
      this.route.todashboard();
      this.incorrect = false;
    }
  }
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
  logIn() {
    this.userAuth.username = this.loginForm.value.email;
    this.userAuth.password = this.loginForm.value.password;
    this.auth.login(this.userAuth).subscribe(
      data => {
        console.log(data.Token);
        if(data.Token != null) {
          this.auth.setBearerToken(data["Token"]);
          sessionStorage.setItem("username", this.loginForm.value.email);
          this.route.todashboard();
          console.log(data);
        }
        else
        {
          this.incorrect = true;
        }
        

      },
      error => {
        console.log(error);
      });
  }
  tosignup() {
    this.route.tosignup();
  }

}