import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceDetailsTitleComponent } from './character-interface-details-title.component';

describe('CharacterInterfaceDetailsTitleComponent', () => {
  let component: CharacterInterfaceDetailsTitleComponent;
  let fixture: ComponentFixture<CharacterInterfaceDetailsTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceDetailsTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceDetailsTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
