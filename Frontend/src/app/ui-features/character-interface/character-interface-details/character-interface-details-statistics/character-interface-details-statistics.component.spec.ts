import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceDetailsStatisticsComponent } from './character-interface-details-statistics.component';

describe('CharacterInterfaceDetailsStatisticsComponent', () => {
  let component: CharacterInterfaceDetailsStatisticsComponent;
  let fixture: ComponentFixture<CharacterInterfaceDetailsStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceDetailsStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceDetailsStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
