import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervalObservableComponent } from './interval-observable.component';

describe('IntervalObservableComponent', () => {
  let component: IntervalObservableComponent;
  let fixture: ComponentFixture<IntervalObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntervalObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntervalObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
