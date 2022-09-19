import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe01Component } from './mfe01.component';

describe('Mfe01Component', () => {
  let component: Mfe01Component;
  let fixture: ComponentFixture<Mfe01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mfe01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mfe01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
