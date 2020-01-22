import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SkillsRoutingModule} from './skills-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SkillsComponent } from './skills.component';

//import { BannerComponent } from '../banner/banner.component';

@NgModule({
  imports: [
    CommonModule,
    SkillsRoutingModule, NgbModule
  ],
  declarations: [SkillsComponent],
  bootstrap: []
})
export class SkillsModule { }

