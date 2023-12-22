import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  templateUrl: 'event-thumbnail.component.html',
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  styleUrls: ['event-thumbnail.component.css']
})
export class EventThumbnailComponent {
  @Input() event: any; // will be passed from other component

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return [];
  }
}
