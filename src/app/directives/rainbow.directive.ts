import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  // Qu'est ce que veux gérer comme propriété
  @HostBinding('style.color') color = '';
  @HostBinding('style.borderColor') bc = '';
  constructor( private host: ElementRef) { }
  // Quel evenement je dois gérer
  @HostListener('keyup') onKeyUp() {
    this.bc = this.color = this.getRandomColor();
  }
  getRandomColor(): string {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
}
