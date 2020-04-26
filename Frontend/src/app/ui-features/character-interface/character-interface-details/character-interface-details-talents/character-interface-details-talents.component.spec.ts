import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceDetailsTalentsComponent } from './character-interface-details-talents.component';

describe('CharacterInterfaceDetailsTalentsComponent', () => {
  let component: CharacterInterfaceDetailsTalentsComponent;
  let fixture: ComponentFixture<CharacterInterfaceDetailsTalentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceDetailsTalentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceDetailsTalentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
