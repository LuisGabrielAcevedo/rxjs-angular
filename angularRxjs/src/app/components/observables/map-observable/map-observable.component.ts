import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { map, filter, tap} from 'rxjs/operators';

@Component({
  selector: 'app-map-observable',
  templateUrl: './map-observable.component.html',
  styleUrls: ['./map-observable.component.css']
})
export class MapObservableComponent implements OnInit {
  @ViewChild('grid', {static: true}) public grid: ElementRef;
  constructor() { }

  ngOnInit() {
    const observable1: Observable<any> = fromEvent(this.grid.nativeElement, 'click').pipe(
      tap(div => console.log(div)),
      map(div => {
        return [div['offsetX'], div['offsetY']]
      }),
      tap(div => console.log(div)),
      filter(div => div[0] > 100)
    );

    observable1.subscribe();
  }
}
