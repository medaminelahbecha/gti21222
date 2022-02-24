import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv [] = [];
  selectCvItemSubject = new Subject<Cv>();
  constructor() {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', '', '1234', 39),
      new Cv(2, 'zayani', 'ahmed', 'ingénieur', '           ', '1235', 20),
      new Cv(3, 'souidi', 'safa', 'ingénieur', 'rotating_card_profile.png', '1236', 20),
    ]
  }
  getCvs(): Cv[] {return this.cvs;}
  getCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
  deleteCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  addCv(cv: Cv): void {
    cv.id = this.cvs[this.cvs.length - 1].id + 1;
    this.cvs.push(cv);
  }
  selectCv(cv: Cv) {
    this.selectCvItemSubject.next(cv);
  }
}
