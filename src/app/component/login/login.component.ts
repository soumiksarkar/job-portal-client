import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AppUtils } from 'src/app/utils/app.util';
import { LoginService } from 'src/app/shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isEmployer: boolean = true;
  isFreelancer: boolean = false;
  selected: string = 'freelancer';


  public loginForm !: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  onChange = (event: any) => {
    console.log(event);
    console.log(this.selected);
  }

  onLogin() {
    let request = {
      'username': this.loginForm.value.email,
      'password': this.loginForm.value.password
    }
    if (this.selected === 'employer') {
      let currentUser: any;
      this.loginService.authenticateEmployer(request)
        .subscribe(
          res => {
            console.log(res);
            currentUser = {
              'type': 'employer',
              'data': res
            }
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            this.router.navigateByUrl("/employer/dashboard");
          },
          err => {
            console.log(err);
            this.showAlert();
          }
        );

    } else if (this.selected === 'freelancer') {
      let currentUser: any;
      this.loginService.authenticateFreelancer(request)
        .subscribe(
          res => {
            console.log(res);
            currentUser = {
              'type': 'freelancer',
              'data': res
            }
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            this.router.navigateByUrl("/freelancer/dashboard");
          },
          err => {
            console.log(err);
            this.showAlert();
          }
        );
    }
  }

  private showAlert() {
    AppUtils.alert('loginWrnCredsAlertPlchldr', 'Wrong username or password', 'danger', 'loginCredsWrongBtn');
    setTimeout(() => {
      var button = document.getElementById('loginCredsWrongBtn');
      button.click();
    }, 3000);
  }

}
