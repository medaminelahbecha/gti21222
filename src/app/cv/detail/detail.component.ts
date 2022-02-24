import {Component, Input, OnInit} from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../services/embauche.service";
import {ToastrService} from "ngx-toastr";
import {CvService} from "../services/cv.service";
import {distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  // detailComponent(cv) {}
  @Input() cv: Cv | null = null;
  constructor(
    private embaucheService: EmbaucheService,
    private toaster: ToastrService,
    private cvService: CvService
  ) { }
  ngOnInit(): void {
    this.cvService.selectCvItemSubject
      .pipe(distinctUntilChanged())
      .subscribe(
      cv => {this.cv = cv;}
    )
  }
  embaucher() {
    if (this.cv && !this.embaucheService.embaucher(this.cv)) {
      this.toaster.warning(`Le cv de ${this.cv.name} est déjà sélectionné`);
    }
  }
}
