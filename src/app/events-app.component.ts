import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app-root',
  template: '<nav-bar></nav-bar><events-list></events-list>',
  styleUrls: [
    'events-app.component.css'
  ]
})

export class EventsAppComponent {
  title = 'app';
}
