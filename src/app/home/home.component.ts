import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { PROJECTS } from '../data/projects';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
})
export class HomeComponent {
  readonly featured = PROJECTS.filter((project) =>
    ['ic-design', 'stormwater-runoff', 'wearable-health-sensor'].includes(
      project.id,
    ),
  );
  readonly topics = [
    'PCB Design',
    'IC Design',
    'Analog Circuit Design',
    'Validation & Test',
    'Embedded Systems',
  ];
  constructor() {
    inject(Title).setTitle('Vivian Zeru | Electrical & Computer Engineering');
    inject(Meta).updateTag({
      name: 'description',
      content:
        'Exploring electronics through circuit design, validation, and hands-on engineering. Discover Vivian Zeru’s hardware projects.',
    });
  }
}
