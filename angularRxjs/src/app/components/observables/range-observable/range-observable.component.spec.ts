import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeObservableComponent } from './range-observable.component';

describe('RangeObservableComponent', () => {
  let component: RangeObservableComponent;
  let fixture: ComponentFixture<RangeObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
