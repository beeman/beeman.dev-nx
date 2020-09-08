import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from '@beeman/ui'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Pages go here!
    ],
  },
]
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
