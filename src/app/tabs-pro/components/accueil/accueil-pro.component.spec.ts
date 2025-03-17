import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilProComponent } from './reservation.component';

describe('AccueilProComponent', () => {
  let component: AccueilProComponent;
  let fixture: ComponentFixture<AccueilProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccueilProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccueilProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
