import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Router } from '@angular/router';
import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    
    constructor(private router: Router, private authenticatorService: AuthenticatorService) {}
    
    ngOnInit() {
      this.authenticatorService.subscribe(() => {
        const { route } = this.authenticatorService;
        
        if (route == 'authenticated') {
          this.router.navigate(['/dashboard'])
        }
      });
    }
    
    ngOnDestroy() {
      
    }
}