import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapToObservableComponent } from './map-to-observable.component';

describe('MapToObservableComponent', () => {
  let component: MapToObservableComponent;
  let fixture: ComponentFixture<MapToObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapToObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapToObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
