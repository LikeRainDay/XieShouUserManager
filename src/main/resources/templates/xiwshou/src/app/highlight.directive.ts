import {Directive, ElementRef, HostListener, Input} from "@angular/core";
/**
 * Created by housh on 2017/6/9.
 */
@Directive({selector: `[myHighlight]`})


export class HighlightDirective {

  @Input('myHighlight') highlightColor: string;

  @Input() defaultColor: string = "violet";

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'yellow');
  }

  @HostListener('mouseenter') onMouseLeave() {
    this.highlight(null);
  }

  private  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;

  }


}
