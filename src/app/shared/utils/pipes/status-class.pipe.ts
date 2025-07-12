import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusClass',
  standalone: true
})
export class StatusClassPipe implements PipeTransform {

  transform(value: string): string {
    return 'status-' + value.toLowerCase().replace(/\s+/g, '-');
  }
}
