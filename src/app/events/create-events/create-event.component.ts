import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../shared/event.service';

@Component({
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {
  newEvent;
  isUnsaved = true;

  constructor(private router: Router,
              private eventService: EventService) {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isUnsaved = false;
      this.router.navigate(['/events']);
    });
  }
}
