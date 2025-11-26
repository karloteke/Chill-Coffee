import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Grinding } from './grinding';

describe('Grinding', () => {
  let component: Grinding;
  let fixture: ComponentFixture<Grinding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Grinding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Grinding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
