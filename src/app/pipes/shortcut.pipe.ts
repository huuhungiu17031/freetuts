import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortcut'
})
export class ShortcutPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    if (!value) return null;
    let actualLimit = limit ? limit : 100;
    return value.substr(0, actualLimit) + ' ...';
  }


}
