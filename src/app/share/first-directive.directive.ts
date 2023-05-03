import { Directive, ElementRef , HostListener,Input} from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {
  constructor(private el: ElementRef) {}
@Input('appFirstDirective') backgroundColor =''

  @HostListener('mouseover') mouseover(){
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
  }


  @HostListener('mouseout') mouseout(){
    this.el.nativeElement.style.backgroundColor = "";
  }


  



}
