import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomStyles]',
})
export class CustomStylesDirective {
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.changebG('yellow');
  //   this.changeColor('#FFF');
  //   this.changeBoxShadow('rgba(99, 99, 99, 0.4) 0px 2px 8px 0px;');
  //   this.changePadding('10px');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.changebG('');
  //   this.changeColor('');
  //   this.changeBoxShadow('');
  //   this.changePadding('');
  // }

  constructor( el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }
  // changebG(bgColor: any) {
  //   this.el.nativeElement.style.backgroundColor = bgColor;
  // }
  // changeColor(color: any) {
  //   this.el.nativeElement.style.color = color;
  // }
  // changeBoxShadow(boxShadow: any) {
  //   this.el.nativeElement.style.boxShadow = boxShadow;
  // }
  // changePadding(padd: any) {
  //   this.el.nativeElement.style.padding = padd;
  // }
}
