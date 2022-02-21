import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  title = 'Je suis le firstCompnent';
  isHidden =  false;
  message = '';
  constructor() {}

  ngOnInit(): void {
    // setTimeout(
    //   () => {
    //     this.title = 'new Title :)';
    //     this.isHidden = ! this.isHidden;
    //   }, 3000
    // );
  }
  changeBehaviour() {
    this.title = 'new Title :)';
    this.isHidden = ! this.isHidden;
  }

  showMessage(inputContent: string) {
    this.message = inputContent;
  }
}
