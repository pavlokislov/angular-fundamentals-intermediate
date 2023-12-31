import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail/event-thumbnail.component';
import {NavigationBarComponent} from './navigation/navigation-bar.component';
import {EventService} from './events/shared/event.service';
import {Toastr, TOASTR_TOKEN} from './common/toastr.service';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes';
import {CreateEventComponent} from './events/create-events/create-event.component';
import {Error404Component} from './errors/error-404.component';
import {EventsListResolver} from './resolver/events-list-resolver.service';
import {AuthService} from './user/login/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CreateSessionComponent} from './events/event-details/create-session/create-session.component';
import {SessionListComponent} from './events/event-details/session-list/session.list.component';
import {CollapsibleWellComponent} from './common/collapsible-well/collapsible-well.component';
import {DurationPipe} from './events/shared/duration-pipe/duration.pipe';
import {SimpleModalComponent} from './common/simple-modal/simple-modal.component';
import {JQ_TOKEN} from './common/jQuery.service';
import {ModalTriggerDirective} from './common/modal-trigger/modal-trigger.directive';
import {UpvoteComponent} from './events/event-details/upvote/upvote.component';
import {VoterService} from './events/event-details/voter/voter.service';
import {LocationValidator} from './events/create-events/location-validator/location-validator.directive';
import {HttpClientModule} from '@angular/common/http';
import {EventResolver} from './resolver/event-resolver.service';

let toastr: Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  // importing other modules
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
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
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator
  ],
  // add services
  providers:
    [EventService,
      {
        provide: TOASTR_TOKEN, useValue: toastr
      },
      {
        provide: JQ_TOKEN, useValue: jQuery
      },
      EventResolver,
      EventsListResolver,
      AuthService,
      VoterService,
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
