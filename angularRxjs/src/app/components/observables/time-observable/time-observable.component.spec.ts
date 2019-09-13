import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeObservableComponent } from './time-observable.component';

describe('TimeObservableComponent', () => {
  let component: TimeObservableComponent;
  let fixture: ComponentFixture<TimeObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
