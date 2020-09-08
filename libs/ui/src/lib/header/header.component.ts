import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ui-header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" routerLink="/">{{ title }}</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <ng-container *ngFor="let link of links">
            <li class="nav-item" routerLinkActive="active">
              <a class="nav-link" [routerLink]="link.path">
                {{ link.label }}
              </a>
            </li>
          </ng-container>
        </ul>
      </div>
    </nav>
  `,
})
export class HeaderComponent {
  title = 'beeman.dev'
  links = [
    { path: '/home', label: 'Home' },
    { path: '/blog', label: 'Blog' },
    { path: '/publications', label: 'Publications' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/sponsor-me', label: 'Sponsor Me' },
  ]
}
