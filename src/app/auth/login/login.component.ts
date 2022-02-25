import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {MES_ROUTES} from "../../config/mes-routes.config";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CredentialsDto} from "../dto/credentials.dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
  }

  login(credenials: CredentialsDto) {
    this.authService.login(credenials).subscribe(
      {
        next: (response) => {
          //  Storiou el token
          localStorage.setItem('token', response.id);
          // nebe3thouh lel page cv
          this.router.navigate([MES_ROUTES.cv]);
        },
        error: () => {
          this.toaster.error('Veuillez vérifier vos credentials');
        }
      }
    )
  }
}
