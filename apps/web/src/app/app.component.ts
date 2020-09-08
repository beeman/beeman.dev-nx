import { Component } from '@angular/core'

@Component({
  selector: 'beeman-root',
  template: `
    <!-- router outlet will be here -->
    {{ title }}
  `,
})
export class AppComponent {
  title = 'beeman.dev'
}
