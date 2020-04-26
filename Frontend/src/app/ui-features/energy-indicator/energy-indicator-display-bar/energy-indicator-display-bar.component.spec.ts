import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyIndicatorDisplayBarComponent } from './energy-indicator-display-bar.component';

describe('EnergyIndicatorDisplayBarComponent', () => {
  let component: EnergyIndicatorDisplayBarComponent;
  let fixture: ComponentFixture<EnergyIndicatorDisplayBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergyIndicatorDisplayBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyIndicatorDisplayBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
