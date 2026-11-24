import { Component, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  constructor() {
    inject(Title).setTitle('Contact | Vivian Zeru');
    inject(Meta).updateTag({
      name: 'description',
      content:
        'Contact Vivian Zeru about electrical and computer engineering opportunities, projects, and collaboration.',
    });
  }
}
