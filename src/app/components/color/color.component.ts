import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  @Input() defaultColor = 'red';
  bgc = '';
  constructor(
    private activatedRoute: ActivatedRoute,
    private toaster: ToastrService
  ) { }
  ngOnInit(): void {
    this.bgc = this.defaultColor;
    this.activatedRoute.params.subscribe(
      (mesParams) => {
        this.bgc = mesParams.favoriteColor;
        this.toaster.info(`Bienvenu ${mesParams.name}`);
      }
    );
  }
  changeColor(newColor: string): void {
    this.bgc = newColor;
  }
}
