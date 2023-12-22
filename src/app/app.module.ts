import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail/event-thumbnail.component';
import {NavigationBarComponent} from './navigation/navigation-bar.component';

@NgModule({
  // importing other modules
  imports: [
    BrowserModule
  ],
  // add component, pipe or directive
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavigationBarComponent
  ],
  // add services
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
