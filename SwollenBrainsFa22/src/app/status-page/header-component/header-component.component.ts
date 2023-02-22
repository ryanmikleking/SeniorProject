import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Auth } from 'aws-amplify';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponent implements OnDestroy {
  signedIn = false;
  currentUser;

  loggedIn = false;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  constructor(private auth: AuthService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private router: Router) {
    this.auth.getCurrentUserInfo().then(value => {
      if(value) {
         this.currentUser = value;
         this.loggedIn = true;
      } else {
         this.loggedIn = false;
      }
    })

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }


  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);


  }
   logout() {
    this.auth.logout().finally(() => {
      this.loggedIn = false;
      sessionStorage.clear();
    });
  }

}
