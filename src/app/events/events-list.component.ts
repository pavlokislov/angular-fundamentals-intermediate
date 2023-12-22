import {Component, OnInit} from '@angular/core';
import {EventService} from './shared/event.service';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: any[];

  constructor(private eventService: EventService,
              private toastr: ToastrService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;

  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}
