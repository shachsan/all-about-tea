import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMoveElement]'
})
export class MoveElementDirective {
  @HostBinding('style.top') top:string='200px'
  @HostBinding('style.left') left:string='100px'
  @HostListener('click') onclick(){
    this.top=Math.floor(Math.random()*600)+'px';
    this.left=Math.floor(Math.random()*600)+'px';
  }
  constructor() { }
}
