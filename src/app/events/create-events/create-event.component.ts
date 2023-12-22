import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  templateUrl: './create-event.component.html'
})
export class CreateEventComponent {
  isUnsaved = true;
  constructor(private router: Router) {
  }

  cancel() {
    this.router.navigate(['/events']);

  }

}
