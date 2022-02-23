import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv [] = [];
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', '', '1234', 39),
      new Cv(2, 'zayani', 'ahmed', 'ingénieur', '           ', '1235', 20),
      new Cv(3, 'souidi', 'safa', 'ingénieur', 'rotating_card_profile.png', '1236', 20),
    ]
  }
  getCvs(): Cv[] {return this.cvs;}
}
