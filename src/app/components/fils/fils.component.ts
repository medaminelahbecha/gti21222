import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {
  // create event
  @Output() sendDataToDadEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  sendEvent(message: string): void {
    this.sendDataToDadEvent.emit(message);
  }

}
