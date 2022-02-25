import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {CvService} from "../services/cv.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {MES_ROUTES} from "../../config/mes-routes.config";
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent implements OnInit {
  cv: Cv | null = null;
  constructor(
    private cvService: CvService,
    private router: Router,
    private toaster: ToastrService,
    private activatedRoute: ActivatedRoute,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params) => {
        this.cvService.getCvById(+params.id)?.subscribe(
          {
            next: (cv) => {
            this.cv = cv;
          },
            error: (erreur) => {
              this.toaster.error('Cv innexistant');
              this.router.navigate([MES_ROUTES.cv]);
            }
          }
        );
      }
    )
  }

  delete() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv).subscribe(
        {
          next: () => {
            this.toaster.success(`${this.cv?.firstname} ${this.cv?.firstname} a été supprimé avec succès`);
            this.router.navigate([MES_ROUTES.cv]);
          },
          error: (erreur) => {
            console.log(erreur);
            this.toaster.error(`Problème avec le serveur veuillez contacter l'admin`);
          }
        }
      );
    }
  }
}
