import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {filter, map} from "rxjs/operators";

@Component({
  selector: 'app-test-observable',
  templateUrl: './test-observable.component.html',
  styleUrls: ['./test-observable.component.css']
})
export class TestObservableComponent implements OnInit {
  observable: Observable<number> = new Observable<number>((observer) => {
    let i = 5;
    setInterval(() => {
      if (!i) {
        observer.complete();
      }
      observer.next(i--);
    }, 1000);
  });
  constructor(private toaster: ToastrService) {
  }

  ngOnInit(): void {

    this.observable.subscribe((val) => {
      console.log(val);
    });
    this.observable
      .pipe(
        map( x => x * 3),
        filter( x => x%2 == 0 )
      )
     .subscribe({
     next: (val) => {
       this.toaster.info(val+'');
     },
     complete: () => this.toaster.success('Fin du flux'),
     error: (e) => {
       this.toaster.error('y a une erreur');
       console.log(e);
     }
    });


  }

}
