import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceMenuListButtonComponent } from './character-interface-menu-list-button.component';

describe('CharacterInterfaceMenuListButtonComponent', () => {
  let component: CharacterInterfaceMenuListButtonComponent;
  let fixture: ComponentFixture<CharacterInterfaceMenuListButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceMenuListButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceMenuListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
