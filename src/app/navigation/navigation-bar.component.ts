import {Component} from '@angular/core';
import {AuthService} from '../user/login/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['navigation-bar.component.css']
})

export class NavigationBarComponent {
  constructor(public authService: AuthService) {
  }

}
