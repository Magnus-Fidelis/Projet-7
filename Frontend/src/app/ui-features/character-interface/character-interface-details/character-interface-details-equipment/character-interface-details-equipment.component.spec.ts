import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceDetailsEquipmentComponent } from './character-interface-details-equipment.component';

describe('CharacterInterfaceDetailsEquipmentComponent', () => {
  let component: CharacterInterfaceDetailsEquipmentComponent;
  let fixture: ComponentFixture<CharacterInterfaceDetailsEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceDetailsEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceDetailsEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
