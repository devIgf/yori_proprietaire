import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseProComponent } from './analyse-pro.component';

describe('AnalyseProComponent', () => {
  let component: AnalyseProComponent;
  let fixture: ComponentFixture<AnalyseProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyseProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyseProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
