import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: [ './contact.component.scss' ]
})
export class ContactComponent  {
  name = 'Contact Us';
  userForm:FormGroup;
  constructor(){
    this.userForm = new FormGroup({
      'name' : new FormControl('',Validators.required),
      'email' : new FormControl('',Validators.required),
      'aligned' : new FormControl(true,Validators.required),
      'multiple_align' : new FormArray([
        new FormGroup({
          'left' : new FormControl(true,Validators.required)
        }),
        new FormGroup({
          'middle' : new FormControl(false,Validators.required)
          
        }),
        new FormGroup({
          'right' : new FormControl(false,Validators.required)
          
        })
      ]),
      'add_adress' : new FormArray([
        this.create_Address()
      ])
    })
  }
  create_Address(){
    return new FormGroup({
          'county': new FormControl('',Validators.required),
          'city': new FormControl('',Validators.required),
          'state' : new FormControl('',Validators.required)
        })
  }
  add_address(){
    var addressArray = this.userForm.get('add_adress') as FormArray;
    addressArray.push(this.create_Address());
  }
  remove(index){
    var remove_addr= this.userForm.get('add_adress') as FormArray;
    remove_addr.removeAt(index);
  }
  submit(){
    if(this.userForm.valid){
      
      console.log(this.userForm.value);
      alert(this.userForm.value)
    }
  }
  reset(){
    this.userForm.reset();
  }

}
