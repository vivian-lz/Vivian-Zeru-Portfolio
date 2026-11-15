import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PROJECTS } from '../data/projects';
import { Project } from '../data/project.model';

@Component({
  selector: 'app-project-detail',
  standalone: false,
  templateUrl: './project-detail.component.html',
})
export class ProjectDetailComponent {
  project?: Project;
  children: Project[] = [];
  related: Project[] = [];

  constructor() {
    const title = inject(Title);
    const meta = inject(Meta);
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed(inject(DestroyRef)))
      .subscribe((params) => {
        this.project = PROJECTS.find(
          (project) => project.id === params.get('id'),
        );
        this.children = PROJECTS.filter(
          (project) => project.parentId === this.project?.id,
        );
        this.related = PROJECTS.filter((project) =>
          this.project?.relatedIds?.includes(project.id),
        );
        title.setTitle(
          `${this.project?.title || 'Project not found'} | Vivian Zeru`,
        );
        meta.updateTag({
          name: 'description',
          content:
            this.project?.summary ||
            'Explore Vivian Zeru’s engineering projects.',
        });
      });
  }
}
