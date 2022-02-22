import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent implements OnInit {
  color = 'red';
  size = 50;
  font = 'garamod';
  align = 'left';
  constructor() { }

  ngOnInit(): void {
  }
  changeAlign(align: string) {
    this.align = align;
  }

}
