import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;

  public constructor(private eventService: EventService,
                     private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

}
