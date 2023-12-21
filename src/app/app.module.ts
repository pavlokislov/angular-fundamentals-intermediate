import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  // importing other modules
  imports: [
    BrowserModule
  ],
  // add component, pipe or directive
  declarations: [
    EventsAppComponent
  ],
  // add services
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
