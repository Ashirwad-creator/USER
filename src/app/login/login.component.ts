import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Service/authentication.service';
import{SignInData} from '../Service/signInData'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormValid =false;
  areCredentialsInvalid = false;
  isAuthenticated = false;


  constructor(public authenticationService: AuthenticationService, private router: Router) { }


  ngOnInit(): void {
  }
  onSubmit(signInForm :NgForm) {
    if(!signInForm.valid) {
      this.isFormValid =true;
      this.areCredentialsInvalid =false;
      return;

    }
    this.checkCredentials(signInForm);
  }

  private checkCredentials(signInForm: NgForm) {
    const signInData = new SignInData(signInForm.value.login, signInForm.value.password);
    if(!this.authenticationService.authenticate(signInData)) {
      this.isFormValid= false;
      this.areCredentialsInvalid= true;

    }
   }

   forgotPassword() {
    this.isAuthenticated =false;
    this.router.navigate(['forgot-password']);
   }
   

}
