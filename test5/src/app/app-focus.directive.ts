import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppFocus]'
})

export class AppFocusDirective implements
 AfterViewInit {
  constructor(private host: ElementRef) {}

  ngAfterViewInit() {
    this.host.nativeElement.focus();
  } 
}