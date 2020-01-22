import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name : 'addWelcomeWord'
})
export class addWelcomeWordPipe implements PipeTransform{
  transform(value : string,text : string): string{ //transform(value,text){
    text = 'Welcome' + ' ';
    return text+value;
  }
}