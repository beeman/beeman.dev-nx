import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
      { path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then((m) => m.BlogModule) },
      { path: 'about', loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule) },
      { path: 'contact', loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule) },
      {
        path: 'publications',
        loadChildren: () => import('./pages/publications/publications.module').then((m) => m.PublicationsModule),
      },
      {
        path: 'sponsor-me',
        loadChildren: () => import('./pages/sponsor-me/sponsor-me.module').then((m) => m.SponsorMeModule),
      },
    ]),
  ],
})
export class PagesModule {}
