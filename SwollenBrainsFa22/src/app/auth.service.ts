import { Router } from '@angular/router';
import {Injectable} from '@angular/core';

import {Auth} from 'aws-amplify';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedIn = false;
  currentUser;
  constructor(private router: Router) {

  }

  getCurrentUserInfo() {
    return Auth.currentUserInfo().then((info) => {
      this.currentUser = info;
      return info;
    });
  }

  async signIn(username: string, password: string) {
    await Auth.signIn(username, password)
      .then(user => {
        console.log(user);
        this.signedIn = true;
      })
      .catch(err => {
        console.log(err);
        this.signedIn = false;
      });
  }

  async logout() {
    await Auth.signOut().then((res) => {
      this.signedIn = false;
      this.router.navigate(['/login'])
    });
  }

}