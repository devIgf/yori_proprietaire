import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSideBarComponent } from './layout-side-bar.component';

describe('LayoutSideBarComponent', () => {
  let component: LayoutSideBarComponent;
  let fixture: ComponentFixture<LayoutSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
