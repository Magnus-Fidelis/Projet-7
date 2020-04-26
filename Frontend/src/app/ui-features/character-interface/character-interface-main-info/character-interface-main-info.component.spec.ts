import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceMainInfoComponent } from './character-interface-main-info.component';

describe('CharacterInterfaceMainInfoComponent', () => {
  let component: CharacterInterfaceMainInfoComponent;
  let fixture: ComponentFixture<CharacterInterfaceMainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceMainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceMainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
