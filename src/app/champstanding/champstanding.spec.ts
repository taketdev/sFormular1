import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Champstanding } from './champstanding';

describe('Champstanding', () => {
  let component: Champstanding;
  let fixture: ComponentFixture<Champstanding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Champstanding],
    }).compileComponents();

    fixture = TestBed.createComponent(Champstanding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
