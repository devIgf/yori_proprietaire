import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtablissementPopupComponent } from './etablissement-popup.component';

describe('EtablissementPopupComponent', () => {
  let component: EtablissementPopupComponent;
  let fixture: ComponentFixture<EtablissementPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtablissementPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtablissementPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
