import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  cvs: Cv[] = [];
  // @Output() forwardCv = new EventEmitter<Cv>();
  constructor(private cvService: CvService, private toaster: ToastrService) {
    this.cvService.getCvs().subscribe({
      next: (cvs) => {this.cvs = cvs;},
      error:(erreur) => {
          this.cvs = this.cvService.getFakeCvs();
          this.toaster.error(`Problème avec le serveur veuillez conatcer l'admin`);
        }
      }
    );
  }

  ngOnInit(): void {
  }

  // onSelectCv(cv: Cv) {
  //   this.forwardCv.emit(cv);
  // }
}
