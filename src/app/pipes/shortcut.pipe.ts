import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case "Chuyên đề":
        return "Video"
      case "Web miễn phí":
        return "WordPress"
      case "Quản trị web":
        return 'Webmaster'
      default:
        return value
    }
  }


}
