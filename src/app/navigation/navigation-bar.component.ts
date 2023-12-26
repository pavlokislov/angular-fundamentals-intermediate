import {Component} from '@angular/core';
import {AuthService} from '../user/login/auth.service';
import {ISession} from '../events/shared/event.model';
import {EventService} from '../events/shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['navigation-bar.component.css']
})

export class NavigationBarComponent {
  searchTerm = '';
  foundSessions: ISession[];
  constructor(public authService: AuthService,
              private eventService: EventService) {
  }

  searchSession(searchTerm){
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      }
    );
  }
}
