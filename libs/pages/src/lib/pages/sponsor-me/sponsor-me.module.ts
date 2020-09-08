import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { SponsorMeComponent } from './sponsor-me.component'

const routes: Routes = [{ path: '', component: SponsorMeComponent }]

@NgModule({
  declarations: [SponsorMeComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class SponsorMeModule {}
