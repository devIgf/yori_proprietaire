import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InelComponent } from './inel.component';

describe('InelComponent', () => {
  let component: InelComponent;
  let fixture: ComponentFixture<InelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
