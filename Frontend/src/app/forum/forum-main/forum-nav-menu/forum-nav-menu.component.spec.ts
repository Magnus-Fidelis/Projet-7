import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumNavMenuComponent } from './forum-nav-menu.component';

describe('ForumNavMenuComponent', () => {
  let component: ForumNavMenuComponent;
  let fixture: ComponentFixture<ForumNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
