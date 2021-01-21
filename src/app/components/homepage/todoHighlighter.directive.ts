import { Directive, ElementRef, Input, OnInit } from "@angular/core";

@Directive({
  selector: "[appTodoHighlighter]",
})
export class TodoHighlighter implements OnInit {
  @Input()
  currentId: number = 0;

  @Input()
  highlightId: number = 0;

  @Input()
  color: string = "";

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.currentId === this.highlightId) {
      this.el.nativeElement.style.color = this.color;
    }
  }
}
