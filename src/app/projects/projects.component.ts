import { Component, DestroyRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Title, Meta } from '@angular/platform-browser';
import {
  PROJECTS,
  FOCUS_AREAS,
  STATUSES,
  CATEGORIES,
  filterProjects,
} from '../data/projects';

@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
})
export class ProjectsComponent {
  readonly focusAreas = FOCUS_AREAS;
  readonly focusOptions = ['All', ...FOCUS_AREAS];
  readonly statusOptions = ['All', ...STATUSES];
  readonly statuses = STATUSES;
  readonly categories = CATEGORIES;
  query = '';
  focus = 'All';
  status = 'All';
  category = 'All';
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);

  constructor() {
    inject(Title).setTitle('Projects | Vivian Zeru');
    inject(Meta).updateTag({
      name: 'description',
      content:
        'Explore Vivian Zeru’s PCB, IC, analog circuit, validation, embedded, and software projects.',
    });
    this.route.queryParamMap
      .pipe(takeUntilDestroyed(inject(DestroyRef)))
      .subscribe((params) => {
        this.query = params.get('q') || '';
        this.focus = this.focusAreas.includes(params.get('focus') || '')
          ? params.get('focus')!
          : 'All';
        this.status = this.statuses.some(
          (status) => status === params.get('status'),
        )
          ? params.get('status')!
          : 'All';
        this.category = this.categories.some(
          (category) => category === params.get('category'),
        )
          ? params.get('category')!
          : 'All';
      });
  }

  get visibleProjects() {
    // Supporting IC studies live in the collection, but are also discoverable by search.
    const entries = this.query.trim()
      ? PROJECTS
      : PROJECTS.filter((project) => !project.parentId);
    return filterProjects(
      entries,
      this.query,
      this.focus,
      this.status,
      this.category,
    );
  }

  updateFilters() {
    // Put filters in the URL so refresh, browser Back, and shared links work naturally.
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        q: this.query || null,
        focus: this.focus === 'All' ? null : this.focus,
        status: this.status === 'All' ? null : this.status,
        category: this.category === 'All' ? null : this.category,
      },
      replaceUrl: true,
    });
  }

  resetFilters() {
    this.router.navigate(['/projects']);
  }
}
