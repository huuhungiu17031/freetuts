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
      case "Chia sẻ theme WordPress":
        return 'Chia sẻ theme'
      case "Lập trình plugin WP":
        return 'Lập trình plugin'
      case "Lập trình theme WP":
        return 'Lập trình theme'
        case "Thủ thuật theme WP":
          return "Thủ thuật WordPress"
      default:
        return value
    }
  }


}
