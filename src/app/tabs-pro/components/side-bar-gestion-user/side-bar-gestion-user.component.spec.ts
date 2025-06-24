import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarGestionUserComponent } from './side-bar-gestion-user.component';

describe('SideBarGestionUserComponent', () => {
  let component: SideBarGestionUserComponent;
  let fixture: ComponentFixture<SideBarGestionUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideBarGestionUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarGestionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
