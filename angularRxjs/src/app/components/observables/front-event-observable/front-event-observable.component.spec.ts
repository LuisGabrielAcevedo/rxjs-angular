import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEventObservableComponent } from './front-event-observable.component';

describe('FrontEventObservableComponent', () => {
  let component: FrontEventObservableComponent;
  let fixture: ComponentFixture<FrontEventObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontEventObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEventObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
