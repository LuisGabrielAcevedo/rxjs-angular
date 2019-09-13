import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterObservableComponent } from './filter-observable.component';

describe('FilterObservableComponent', () => {
  let component: FilterObservableComponent;
  let fixture: ComponentFixture<FilterObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
