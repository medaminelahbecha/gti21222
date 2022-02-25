import { Injectable } from '@angular/core';
import {Cv} from "../model/cv";
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {APIS} from "../../config/apis.config";
import {DeleteCvResponse} from "../dto/delete-cv-response.dto";

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvs: Cv [] = [];
  selectCvItemSubject = new Subject<Cv>();
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(1, 'sellaouti', 'aymen', 'teacher', '', '1234', 39),
      new Cv(2, 'zayani', 'ahmed', 'ingénieur', '           ', '1235', 20),
      new Cv(3, 'souidi', 'safa', 'ingénieur', 'rotating_card_profile.png', '1236', 20),
    ]
  }

  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(APIS.cv);
  }
  getCvById(id: number): Observable<Cv> | null {
    return this.http.get<Cv>(APIS.cv + id);
  }
  deleteCv(cv: Cv): Observable<DeleteCvResponse> {
    return this.http.delete<DeleteCvResponse>(APIS.cv + cv.id);
  }
  addCv(cv: Cv): Observable<Cv> {
    const token = localStorage.getItem('token');
    // if (token) {
    //   const params = new HttpParams().set('access_token', token);
    //   return this.http.post<Cv>(APIS.cv, cv, {params});
    // }
    return this.http.post<Cv>(APIS.cv, cv);
  }
  selectCv(cv: Cv) {
    this.selectCvItemSubject.next(cv);
  }
  //-------------------Fake Data
  getFakeCvs(): Cv[] {return this.cvs;}
  deleteFakeCv(cv: Cv): boolean {
    const index = this.cvs.indexOf(cv);
    if (index >= 0) {
      this.cvs.splice(index, 1);
      return true;
    }
    return false;
  }
  addFakeCv(cv: Cv): void {
    cv.id = this.cvs[this.cvs.length - 1].id + 1;
    this.cvs.push(cv);
  }
  getFakeCvById(id: number): Cv | null {
    return this.cvs.find((cv) => cv.id == id) ?? null;
  }
}
