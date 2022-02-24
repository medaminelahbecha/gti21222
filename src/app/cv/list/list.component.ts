import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  // @Output() forwardCv = new EventEmitter<Cv>();
  constructor(
    private cvService: CvService
  ) {
    this.cvs = this.cvService.getCvs();
  }

  ngOnInit(): void {
  }

  // onSelectCv(cv: Cv) {
  //   this.forwardCv.emit(cv);
  // }
}
