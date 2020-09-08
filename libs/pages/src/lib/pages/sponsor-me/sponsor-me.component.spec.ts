import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SponsorMeComponent } from './sponsor-me.component'

describe('SponsorMeComponent', () => {
  let component: SponsorMeComponent
  let fixture: ComponentFixture<SponsorMeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SponsorMeComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsorMeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
