import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaudelComponent } from './claudel.component';

describe('ClaudelComponent', () => {
  let component: ClaudelComponent;
  let fixture: ComponentFixture<ClaudelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaudelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaudelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
