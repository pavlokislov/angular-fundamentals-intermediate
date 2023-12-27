import {Component, OnInit} from '@angular/core';
import {AuthService} from './user/login/auth.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app-root',
  template: '<nav-bar></nav-bar><router-outlet></router-outlet>',
  styleUrls: [
    'events-app.component.css'
  ]
})

export class EventsAppComponent implements OnInit {
  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
    this.auth.checkAuthenticationStatus();
  }


}
