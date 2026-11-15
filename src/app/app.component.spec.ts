import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

describe('Portfolio application shell', () => {
  beforeEach(async () => {
    // Exercise the actual shell components without requiring an SSR response in a unit test.
    await TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [
        AppComponent,
        HeaderComponent,
        NavComponent,
        FooterComponent,
      ],
    }).compileComponents();
  });

  it('renders the accessible page shell and original home link', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    expect(page.querySelector('.skip-link')?.getAttribute('href')).toBe(
      '#main-content',
    );
    expect(page.querySelector('main#main-content')).toBeTruthy();
    expect(page.querySelector('header .wordmark')?.textContent).toContain(
      'Vivian Zeru',
    );
    expect(page.querySelector('footer')).toBeTruthy();
  });

  it('opens the mobile navigation and closes it after choosing a page', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const page = fixture.nativeElement as HTMLElement;
    const toggle = page.querySelector('.menu-toggle') as HTMLButtonElement;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
    toggle.click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    (page.querySelector('.site-nav a') as HTMLAnchorElement).click();
    fixture.detectChanges();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
