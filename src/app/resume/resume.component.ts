import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { EXPERIENCE, RESEARCH, LEADERSHIP, SKILLS } from '../data/experience';

@Component({
  selector: 'app-resume',
  standalone: false,
  templateUrl: './resume.component.html',
})
export class ResumeComponent {
  readonly sections = [
    { id: 'experience', title: 'Experience', entries: EXPERIENCE },
    { id: 'research', title: 'Research', entries: RESEARCH },
    { id: 'leadership', title: 'Leadership & Activities', entries: LEADERSHIP },
  ];
  readonly skills = SKILLS;
  constructor() {
    inject(Title).setTitle('Experience & Resume | Vivian Zeru');
    inject(Meta).updateTag({
      name: 'description',
      content:
        'Vivian Zeru’s hardware experience, research, leadership, education, and technical skills.',
    });
  }
}
