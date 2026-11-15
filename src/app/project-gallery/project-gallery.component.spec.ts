import { TestBed } from '@angular/core/testing';
import { ProjectGalleryComponent } from './project-gallery.component';

describe('Original-image project gallery', () => {
  it('changes the selected figure and its visible caption together', async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectGalleryComponent],
    }).compileComponents();
    const fixture = TestBed.createComponent(ProjectGalleryComponent);
    fixture.componentInstance.images = [
      {
        src: '/fourbitadderlay.png',
        alt: 'Adder layout',
        caption: 'Original layout',
      },
      {
        src: '/fourbitaddersch.png',
        alt: 'Adder schematic',
        caption: 'Original schematic',
      },
    ];
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    (
      page.querySelectorAll(
        '.gallery-thumbnails button',
      )[1] as HTMLButtonElement
    ).click();
    fixture.detectChanges();
    expect(page.querySelector('figcaption')?.textContent).toContain(
      'Original schematic',
    );
    expect(page.querySelector('.gallery-image img')?.getAttribute('src')).toBe(
      '/fourbitaddersch.png',
    );
    expect(page.querySelector('.gallery-image')?.getAttribute('href')).toBe(
      '/fourbitaddersch.png',
    );
    expect(
      page
        .querySelectorAll('.gallery-thumbnails button')[1]
        .getAttribute('aria-pressed'),
    ).toBe('true');
  });
});
