import { Directive, ElementRef,  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTest1]'
})
export class Test1Directive {

  constructor(private el: ElementRef,  private renderer: Renderer2) {
    //el.nativeElement.style.backgroundColor = "gray";
   // el.nativeElement.style.display = "none";
   renderer.setStyle(el.nativeElement, 'backgroundColor', 'gray');
   }

}
