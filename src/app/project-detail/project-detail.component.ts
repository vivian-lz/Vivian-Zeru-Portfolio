import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Title,
  Meta,
  DomSanitizer,
  SafeResourceUrl,
} from '@angular/platform-browser';
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
  youtubeEmbedUrl?: SafeResourceUrl;
  showYoutubeVideo = false;

  constructor() {
    const title = inject(Title);
    const meta = inject(Meta);
    const sanitizer = inject(DomSanitizer);
    inject(ActivatedRoute)
      .paramMap.pipe(takeUntilDestroyed(inject(DestroyRef)))
      .subscribe((params) => {
        this.project = PROJECTS.find(
          (project) => project.id === params.get('id'),
        );
        this.showYoutubeVideo = false;
        const videoId = this.project?.youtubeVideoId;
        // Trust only a fixed YouTube embed origin and a valid video ID, never an arbitrary URL.
        this.youtubeEmbedUrl =
          videoId && /^[A-Za-z0-9_-]{11}$/.test(videoId)
            ? sanitizer.bypassSecurityTrustResourceUrl(
                `https://www.youtube-nocookie.com/embed/${videoId}`,
              )
            : undefined;
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
