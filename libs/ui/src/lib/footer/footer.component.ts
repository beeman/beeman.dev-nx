import { Component } from '@angular/core'

@Component({
  selector: 'ui-footer',
  template: `
    <footer class="text-center">
      <small class="text-muted"> beeman.dev &copy; {{ year }} </small>
    </footer>
  `,
})
export class FooterComponent {
  year = new Date().getFullYear()
}
