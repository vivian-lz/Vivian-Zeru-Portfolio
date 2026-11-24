import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
})
export class AboutComponent {
  constructor() {
    inject(Title).setTitle('About | Vivian Zeru');
    inject(Meta).updateTag({
      name: 'description',
      content:
        'Meet Vivian Zeru: electrical and computer engineering student, creative problem-solver, and hands-on hardware builder.',
    });
  }
}
