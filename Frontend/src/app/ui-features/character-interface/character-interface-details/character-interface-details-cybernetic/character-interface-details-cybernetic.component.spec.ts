import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceDetailsCyberneticComponent } from './character-interface-details-cybernetic.component';

describe('CharacterInterfaceDetailsCyberneticComponent', () => {
  let component: CharacterInterfaceDetailsCyberneticComponent;
  let fixture: ComponentFixture<CharacterInterfaceDetailsCyberneticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceDetailsCyberneticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceDetailsCyberneticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
