import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'ageFilter'
})
export class ageFilterPipe implements PipeTransform{
  transform(value : number):any{ //transform(value,text){
    //text = 'Welcome' + ' ';
    if(value > 25){
        return value;
    }
    
  }
}