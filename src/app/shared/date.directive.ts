import {
  Directive,
  HostListener,
  Input,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appDate]',
})
export class DateDirective {
  @Input() private date: Date;
  private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.paragraph = this.renderer.createElement('p');
  }
  // HostListener to dekorator, który dostaje informacje,
  // na jakie zdarzenie ma reagować
  @HostListener('mouseenter')
  // mouseenter to metoda, która wywoła się po zajściu tego zdarzenia
  mouseenter(eventDate: Event): void {
    this.paragraph.innerHTML = this.date.toLocaleDateString();
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }
  @HostListener('mouseleave')
  mouseleave(eventDate: Event): void {
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }
}
