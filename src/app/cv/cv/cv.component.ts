import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {Logger} from "../../services/logger";
import {SayHelloService} from "../../services/say-hello.service";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  selectedCv: Cv | null = null;
  constructor(
    private logger: Logger,
    private sayHello: SayHelloService
  ) {
  }
  date = new Date();
  ngOnInit(): void {
    this.logger.logger('cc je suis le cv component');
    this.sayHello.hello();
  }

  onForwardCv(cv: Cv) {
    this.selectedCv = cv;
  }
}
