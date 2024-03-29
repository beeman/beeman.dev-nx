import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { LayoutComponent } from '@beeman/ui'
import { ScullyLibModule } from '@scullyio/ng-lib'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      // Pages go here!
      { path: '', loadChildren: () => import('@beeman/pages').then((m) => m.PagesModule) },
    ],
  },
]
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes, { initialNavigation: 'enabled' }), ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
