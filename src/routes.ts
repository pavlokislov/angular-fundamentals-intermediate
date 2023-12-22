import {Routes} from '@angular/router';
import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {CreateEventComponent} from './app/events/create-events/create-event.component';
import {Error404Component} from './app/errors/error-404.component';
import {EventRouteActivator} from './app/events/event-details/event-route-activator.service';
import {EventsListResolver} from './app/resolver/events-list-resolver.service';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: 'events', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('src/app/user/user.module')
      .then(m => m.UserModule)
  }

];
