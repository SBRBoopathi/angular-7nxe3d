import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: [ './skills.component.scss' ]
})
export class SkillsComponent  {
  name = 'skills';
  constructor(private http:HttpClient){}
  myskills : object;
  ngOnInit(){
    this.http.get('https://api.myjson.com/bins/16i7x4').subscribe(data => {
      this.myskills = data;
      console.log(data)
    })
  }


  

  /*page = 1;
  pageSize = 4;
  collectionSize = COUNTRIES.length;

  get countries(): Country[] {
    return COUNTRIES
      .map((country, i) => ({id: i + 1, ...country}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }*/
}
