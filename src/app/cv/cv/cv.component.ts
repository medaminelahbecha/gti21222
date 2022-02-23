import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv: Cv | null = null;
  constructor() { }
  date = new Date();
  ngOnInit(): void {
  }

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
