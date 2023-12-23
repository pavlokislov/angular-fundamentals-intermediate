import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail/event-thumbnail.component';
import {NavigationBarComponent} from './navigation/navigation-bar.component';
import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import {CreateEventComponent} from './events/create-events/create-event.component';
import {Error404Component} from './errors/error-404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventsListResolver} from './resolver/events-list-resolver.service';
import {AuthService} from './user/login/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateSessionComponent} from './events/event-details/create-session/create-session.component';
import {SessionListComponent} from './events/event-details/session-list/session.list.component';
import {CollapsibleWellComponent} from './common/collapsible-well/collapsible-well.component';

@NgModule({
  // importing other modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  // add component, pipe or directive
  declarations: [
    EventsListComponent,
    EventsAppComponent,
    EventThumbnailComponent,
    NavigationBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  // add services
  providers:
    [EventService,
      ToastrService,
      EventRouteActivator,
      EventsListResolver,
      AuthService,
      {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState
      }
    ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isUnsaved) {
  return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
