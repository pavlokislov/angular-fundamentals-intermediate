import {Component, OnInit} from '@angular/core';
import {EventService} from '../shared/event.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent, ISession} from '../shared/event.model';

@Component({
  templateUrl: './event-details.component.html',
  styles: ['event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy = 'all';
  sortBy = 'votes';


  public constructor(private eventService: EventService,
                     private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.event = this.eventService.getEvent(+this.route.snapshot.params.id);
  }

  addSession(){
    this.addMode = true;
  }

  saveNewSession(session:ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    session.id = nextId;
    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);
    this.addMode = false;

  }

  cancelAddSession(){
    this.addMode = false;

  }

}
