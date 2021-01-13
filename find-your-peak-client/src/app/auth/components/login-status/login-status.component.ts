import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: String;

  constructor(private oktaAuthService: OktaAuthService) { }

  ngOnInit(): void {
    //subscribe to auth state changes
    this.oktaAuthService.$authenticationState.subscribe(
      (result) => {
        this.isAuthenticated = result;
        this.getUserDetails();
      }
    );
  }
  getUserDetails() {
    if(this.isAuthenticated){
      //fetch the logged in user details 
      this.oktaAuthService.getUser().then(
        (res) => {
          this.userFullName = res.name;
          console.log(this.userFullName);
        }
      );
    }
  }

  logOut() {
    //terminates the session with Okta and remove current tokens
    this.oktaAuthService.signOut();
  }

}
