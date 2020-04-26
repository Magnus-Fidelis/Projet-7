import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceMainComponent } from './character-interface-main.component';

describe('CharacterInterfaceMainComponent', () => {
  let component: CharacterInterfaceMainComponent;
  let fixture: ComponentFixture<CharacterInterfaceMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
