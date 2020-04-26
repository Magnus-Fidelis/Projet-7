import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateMessageMainComponent } from './private-message-main.component';

describe('PrivateMessageMainComponent', () => {
  let component: PrivateMessageMainComponent;
  let fixture: ComponentFixture<PrivateMessageMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateMessageMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateMessageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
