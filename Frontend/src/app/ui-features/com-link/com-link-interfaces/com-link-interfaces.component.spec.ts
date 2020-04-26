import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLinkInterfacesComponent } from './com-link-interfaces.component';

describe('ComLinkInterfacesComponent', () => {
  let component: ComLinkInterfacesComponent;
  let fixture: ComponentFixture<ComLinkInterfacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComLinkInterfacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComLinkInterfacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
