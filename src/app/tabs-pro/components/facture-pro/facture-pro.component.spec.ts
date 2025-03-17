import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureProComponent } from './facture-pro.component';

describe('FactureProComponent', () => {
  let component: FactureProComponent;
  let fixture: ComponentFixture<FactureProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
