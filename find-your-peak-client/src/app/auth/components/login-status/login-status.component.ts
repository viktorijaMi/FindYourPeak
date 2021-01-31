import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { UserModel } from '../../../UserModel';
import { UserService } from '../../../services/user-service/user.service'

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.scss']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated: boolean = false;
  userFullName: String;
  user: UserModel;

  constructor(private oktaAuthService: OktaAuthService,
              private userService: UserService) { 
                this.user = new UserModel()
              }


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
          this.user.username = res.name;
          this.user.email = res.email;
          this.user.password = res.nonce;
          this.saveUser();
        }
      );
    }
  }

  saveUser(){
    this.userService.addUser(this.user);
  }

  logOut() {
    //terminates the session with Okta and remove current tokens
    this.oktaAuthService.signOut();
  }

}
