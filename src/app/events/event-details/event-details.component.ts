import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './event-details.component.html',
  styles: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any;

  public constructor(private eventService: EventService,
                     private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

}
