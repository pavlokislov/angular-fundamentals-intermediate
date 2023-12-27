import {Routes} from '@angular/router';
import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {CreateEventComponent} from './app/events/create-events/create-event.component';
import {Error404Component} from './app/errors/error-404.component';
import {EventsListResolver} from './app/resolver/events-list-resolver.service';
import {CreateSessionComponent} from './app/events/event-details/create-session/create-session.component';
import {EventResolver} from './app/resolver/event-resolver.service';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('src/app/user/user.module')
      .then(m => m.UserModule)
  }
];
