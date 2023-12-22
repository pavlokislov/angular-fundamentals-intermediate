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

@NgModule({
  // importing other modules
  imports: [
    BrowserModule,
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
    Error404Component
  ],
  // add services
  providers:
    [EventService,
      ToastrService,
      EventRouteActivator,
      EventsListResolver,
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
