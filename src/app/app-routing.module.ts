import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CourseProjectsComponent } from './course-projects/course-projects.component';
import { OrgProjectsComponent } from './org-projects/org-projects.component';
import { HobbyProjectsComponent } from './hobby-projects/hobby-projects.component';
import { CsProjectsComponent } from './cs-projects/cs-projects.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'projects/course', component: CourseProjectsComponent },
  { path: 'projects/org', component: OrgProjectsComponent },
  { path: 'projects/hobbyist', component: HobbyProjectsComponent },
  { path: 'projects/cs', component: CsProjectsComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
