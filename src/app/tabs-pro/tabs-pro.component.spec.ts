import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsProComponent } from './tabs.component';

describe('TabsProComponent', () => {
  let component: TabsProComponent;
  let fixture: ComponentFixture<TabsProComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabsProComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsProComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
