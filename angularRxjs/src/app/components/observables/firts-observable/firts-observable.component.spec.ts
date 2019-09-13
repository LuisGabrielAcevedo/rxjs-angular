import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirtsObservableComponent } from './firts-observable.component';

describe('FirtsObservableComponent', () => {
  let component: FirtsObservableComponent;
  let fixture: ComponentFixture<FirtsObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirtsObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirtsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
