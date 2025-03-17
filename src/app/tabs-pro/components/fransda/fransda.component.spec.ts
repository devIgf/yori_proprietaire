import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FransdaComponent } from './fransda.component';

describe('FransdaComponent', () => {
  let component: FransdaComponent;
  let fixture: ComponentFixture<FransdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FransdaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FransdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
