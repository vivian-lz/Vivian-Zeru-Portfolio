import { Component, Input } from '@angular/core';
import { ProjectImage } from '../data/project.model';

@Component({
  selector: 'app-project-gallery',
  standalone: false,
  templateUrl: './project-gallery.component.html',
})
export class ProjectGalleryComponent {
  @Input() images: ProjectImage[] = [];
  selectedIndex = 0;
}
