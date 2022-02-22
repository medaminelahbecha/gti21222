import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  @Output() forwardCv = new EventEmitter<Cv>();
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', 'rotating_card_profile2.png', '1234', 39),
      new Cv(2, 'zayani', 'ahmed', 'ingénieur', 'rotating_card_profile3.png', '1235', 20),
      new Cv(3, 'souidi', 'safa', 'ingénieur', 'rotating_card_profile.png', '1236', 20),
    ]
  }

  ngOnInit(): void {
  }

  onSelectCv(cv: Cv) {
    this.forwardCv.emit(cv);
  }
}
