import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteProprietaireComponent } from './compte-proprietaire.component';

describe('CompteProprietaireComponent', () => {
  let component: CompteProprietaireComponent;
  let fixture: ComponentFixture<CompteProprietaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompteProprietaireComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompteProprietaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
