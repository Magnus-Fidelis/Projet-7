import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyIndicatorMainComponent } from './energy-indicator-main.component';

describe('EnergyIndicatorMainComponent', () => {
  let component: EnergyIndicatorMainComponent;
  let fixture: ComponentFixture<EnergyIndicatorMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyIndicatorMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyIndicatorMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
