import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
  }

  private addHighlight() {
    const nativeElStyle = this.el.nativeElement.style;
    nativeElStyle.backgroundColor = nativeElStyle.backgroundColor === 'red' ? 'white' : 'red';
  }

  @HostListener('click') onClick() {
    this.addHighlight();
  }

}
