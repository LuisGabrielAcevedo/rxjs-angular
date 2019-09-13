import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromObservableComponent } from './from-observable.component';

describe('FromObservableComponent', () => {
  let component: FromObservableComponent;
  let fixture: ComponentFixture<FromObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
