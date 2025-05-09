import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CourseProjectsComponent } from './course-projects/course-projects.component';
import { OrgProjectsComponent } from './org-projects/org-projects.component';
import { HobbyProjectsComponent } from './hobby-projects/hobby-projects.component';
import { CsProjectsComponent } from './cs-projects/cs-projects.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ContactComponent,
    CourseProjectsComponent,
    OrgProjectsComponent,
    HobbyProjectsComponent,
    CsProjectsComponent,
    AboutComponent,
    ResumeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
