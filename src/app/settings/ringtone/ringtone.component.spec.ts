import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RingtoneComponent } from './ringtone.component';

describe('RingtoneComponent', () => {
  let component: RingtoneComponent;
  let fixture: ComponentFixture<RingtoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RingtoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RingtoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
