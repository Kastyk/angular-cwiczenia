import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChecked]',
})
export class CheckedDirective implements OnInit {
  // dodajemy potrzebne klasy.
  // ElementRef odpowiada za pobranie aktualnego elementu, a renderer z zmiane stylu
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // el.nativeElement to aktualny element li
    const li = this.el.nativeElement;
    // renderer to klasa, która m. in. zmienia css obiektu
    this.renderer.setStyle(li, 'list-style-image', 'url(/assets/checked.png)');
    this.renderer.setStyle(li, 'background', 'aquamarine');
  }
}
