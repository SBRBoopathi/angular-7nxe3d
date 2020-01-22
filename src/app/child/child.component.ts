import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})

export class ChildComponent {

 @Input() childmsg : string; // Using @Input() passing data from parent to child

 //Child to Parent passing data @output starts here 
 message:string = "hello mesage from child component"
 @Output() newMsgEvent = new EventEmitter<string>();
  constructor() { }
  sendMsg(){
    this.newMsgEvent.emit(this.message)
  }
   //Child to Parent passing data @output Ends here 

   viewChildMsg:string = "view child demo"

}