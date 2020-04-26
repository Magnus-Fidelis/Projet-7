import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceMenuListComponent } from './character-interface-menu-list.component';

describe('CharacterInterfaceMenuListComponent', () => {
  let component: CharacterInterfaceMenuListComponent;
  let fixture: ComponentFixture<CharacterInterfaceMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
