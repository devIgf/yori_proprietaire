import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmourComponent } from './amour.component';

describe('AmourComponent', () => {
  let component: AmourComponent;
  let fixture: ComponentFixture<AmourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmourComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
