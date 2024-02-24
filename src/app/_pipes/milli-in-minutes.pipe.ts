import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'milliInMinutes',
  standalone: true,
})
export class MilliInMinutesPipe implements PipeTransform {
  transform(value: number): string {
    if (value < 60000) {
      return 'NO-TIME';
    }
    const hours = Math.floor(value / 3600000); // Convert milliseconds to hours
    const minutes = Math.floor((value % 3600000) / 60000); // Convert remaining milliseconds to minutes
    return `${this.padNumber(hours)}h${this.padNumber(minutes)}min`;
  }

  private padNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
