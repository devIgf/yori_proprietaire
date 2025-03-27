/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LiasonsMapComponent } from './liasonsMap.component';

describe('LiasonsMapComponent', () => {
  let component: LiasonsMapComponent;
  let fixture: ComponentFixture<LiasonsMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiasonsMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiasonsMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
