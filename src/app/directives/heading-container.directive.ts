import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeadingContainer]'
})
export class HeadingContainerDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = '#2f6e91';
    el.nativeElement.style.padding = "10px 15px";
    el.nativeElement.style.borderBottom = '1px solid #eaeaea'

  }


  // widgetTitle() {
  //   this.customizeStyle.color = 'white';
  //   this.customizeStyle.fontSize = "14px";
  //   this.customizeStyle.lineHeight = "1px";
  //   this.customizeStyle.textTransform = 'uppercase';
  //   this.customizeStyle.fontWeight = "bold";
  // }
}
