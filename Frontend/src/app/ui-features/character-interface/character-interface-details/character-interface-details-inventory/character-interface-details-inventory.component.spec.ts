import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceDetailsInventoryComponent } from './character-interface-details-inventory.component';

describe('CharacterInterfaceDetailsInventoryComponent', () => {
  let component: CharacterInterfaceDetailsInventoryComponent;
  let fixture: ComponentFixture<CharacterInterfaceDetailsInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceDetailsInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceDetailsInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
