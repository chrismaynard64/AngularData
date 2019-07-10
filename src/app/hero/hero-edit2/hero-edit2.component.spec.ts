import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroEdit2Component } from './hero-edit2.component';

describe('HeroEdit2Component', () => {
  let component: HeroEdit2Component;
  let fixture: ComponentFixture<HeroEdit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroEdit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroEdit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
