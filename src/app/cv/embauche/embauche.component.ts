import { Component, OnInit } from '@angular/core';
import {Cv} from "../model/cv";
import {EmbaucheService} from "../services/embauche.service";

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {
  cvs: Cv[] = [];
  constructor(
    private embaucheService: EmbaucheService
  ) {
    this.cvs = this.embaucheService.getEmbauchees();
  }

  ngOnInit(): void {
  }

}
