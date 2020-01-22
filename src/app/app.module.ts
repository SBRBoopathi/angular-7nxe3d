import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

/*************************ng Bootrap ************/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbdTablePagination } from './table-pagination';

/*************************ng Bootrap ************/

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { ExperienceComponent } from './experience/experience.component';
import { addWelcomeWordPipe } from './pipes/addwelcome.pipe';
import { ageFilterPipe } from './pipes/agefilter.pipe';
//import { SkillsComponent } from './skills/skills.component';

/************* DropDown  **************/


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills',
    loadChildren:'./skills/skills.module#SkillsModule'
  },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'contact', component: ContactComponent }
];


@NgModule({
  imports: [ BrowserModule, FormsModule, NgbModule, RouterModule.forRoot(appRoutes), HttpClientModule, ReactiveFormsModule],
  exports: [RouterModule, HeaderComponent],
  declarations: [ AppComponent, HelloComponent, HomeComponent, HeaderComponent, BannerComponent, AboutComponent, ContactComponent, ExperienceComponent, addWelcomeWordPipe, ageFilterPipe, ChildComponent, ParentComponent, ChildComponent],
  providers: [],
  bootstrap: [AppComponent, HeaderComponent, BannerComponent, AboutComponent, ContactComponent, ExperienceComponent]
})
export class AppModule { }
