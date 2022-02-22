import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() in = 'yellow';
  @Input() out = 'red';
  @HostBinding('style.backgroundColor') bgc = '';
  constructor(
    private host: ElementRef
  ) {
    console.log('in appHighlight');
  }
  ngOnInit(): void {
    this.bgc = this.out;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
    this.host.nativeElement.innerHTML = 'IN';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
    this.host.nativeElement.innerHTML = 'OUT';
  }
}
