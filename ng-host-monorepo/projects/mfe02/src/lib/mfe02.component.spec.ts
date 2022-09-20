import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mfe02Component } from './mfe02.component';

describe('Mfe02Component', () => {
  let component: Mfe02Component;
  let fixture: ComponentFixture<Mfe02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mfe02Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mfe02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
