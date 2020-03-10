import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupChatRightsComponent } from './group-chat-rights.component';

describe('GroupChatRightsComponent', () => {
  let component: GroupChatRightsComponent;
  let fixture: ComponentFixture<GroupChatRightsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupChatRightsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupChatRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
