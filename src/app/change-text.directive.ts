import { 
  Directive, 
  ElementRef, 
  OnInit, 
  Renderer2,
  HostBinding,
  HostListener, 
} from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})

export class ChangeTextDirective implements OnInit {

  @HostBinding('style.top') top:string='10'
  @HostBinding('style.left') left:string='50'
  @HostListener('click') onclick(){

  }
  constructor(private eleRef:ElementRef, private renderer:Renderer2){}

  ngOnInit(){
    // console.log(this.initialText);
    this.text=this.text+' World!'
  }

}

// ngOnInit(){
  // this.eleRef.nativeElement.textContent=this.eleRef.nativeElement.textContent + ' ' + 'World!'
//   let newText=this.renderer.createText(' World!')
//   this.renderer.appendChild(this.eleRef.nativeElement, newText);
// }