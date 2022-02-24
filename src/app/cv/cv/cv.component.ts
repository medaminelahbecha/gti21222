import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {Logger} from "../../services/logger";
import {SayHelloService} from "../../services/say-hello.service";
import {TodoService} from "../../todo/services/todo.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../services/cv.service";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  // selectedCv: Cv | null = null;
  constructor(
    private logger: Logger,
    private sayHello: SayHelloService,
    private todoService: TodoService,
    private toastr: ToastrService,
    private cvService: CvService
  ) {
  }
  nbre = 0;
  date = new Date();
  ngOnInit(): void {
    this.cvService.selectCvItemSubject
      .pipe(distinctUntilChanged())
      .subscribe(
      (cv) => {this.nbre++;}
    )
    this.logger.logger('cc je suis le cv component');
    this.sayHello.hello();
    this.toastr.info('Bienvenu dans notre CvTech');
  }

  // onForwardCv(cv: Cv) {
  //   this.selectedCv = cv;
  //   this.todoService.loggerTodo();
  // }
}
