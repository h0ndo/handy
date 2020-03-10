import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandySizeComponent } from './handy-size.component';

describe('HandySizeComponent', () => {
  let component: HandySizeComponent;
  let fixture: ComponentFixture<HandySizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandySizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandySizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
