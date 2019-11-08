import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reimb'
})
export class ReimbPipe implements PipeTransform {

  transform(value: number): String {
    if (value === 1){
      return "Lodging";
    } else if (value === 2){
      return "Travel";
    } else if (value === 3){
      return "Food";
    } else {
      return "Other"
    }
  }

}
