import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {CvService} from "../services/cv.service";
import {Router} from "@angular/router";
import {MES_ROUTES} from "../../config/mes-routes.config";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-add-personne',
  templateUrl: './add-personne.component.html',
  styleUrls: ['./add-personne.component.css']
})
export class AddPersonneComponent implements OnInit {

  constructor(
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  addCv(formumaire: NgForm) {
    this.cvService.addCv(formumaire.value);
    this.toaster.success(`Le cv de ${formumaire.value.firstname} ${formumaire.value.name}
     a été ajouté avec succès`);
    this.router.navigate([MES_ROUTES.cv]);
  }
}
