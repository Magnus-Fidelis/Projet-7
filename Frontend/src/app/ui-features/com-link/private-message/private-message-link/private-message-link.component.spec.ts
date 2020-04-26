import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMessageLinkComponent } from './private-message-link.component';

describe('PrivateMessageLinkComponent', () => {
  let component: PrivateMessageLinkComponent;
  let fixture: ComponentFixture<PrivateMessageLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateMessageLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMessageLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
