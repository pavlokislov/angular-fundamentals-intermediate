import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() count: number;

  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }

  @Output() vote = new EventEmitter();
  iconColor: string;

  onClick() {
    this.vote.emit({});
  }

}
