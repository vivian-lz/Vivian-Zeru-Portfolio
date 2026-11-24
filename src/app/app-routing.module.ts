import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'contact', component: ContactComponent },
  // Preserve bookmarks from the original website as filtered directory views.
  {
    path: 'projects/course',
    redirectTo: '/projects?category=Course',
    pathMatch: 'full',
  },
  {
    path: 'projects/org',
    redirectTo: '/projects?category=Organization',
    pathMatch: 'full',
  },
  {
    path: 'projects/hobbyist',
    redirectTo: '/projects?category=Hobbyist',
    pathMatch: 'full',
  },
  {
    path: 'projects/cs',
    redirectTo: '/projects?category=Software',
    pathMatch: 'full',
  },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: '**', component: ProjectDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
