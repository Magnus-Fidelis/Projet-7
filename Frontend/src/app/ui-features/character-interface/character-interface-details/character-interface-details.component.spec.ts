import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterInterfaceDetailsComponent } from './character-interface-details.component';

describe('CharacterInterfaceDetailsComponent', () => {
  let component: CharacterInterfaceDetailsComponent;
  let fixture: ComponentFixture<CharacterInterfaceDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterInterfaceDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterInterfaceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
