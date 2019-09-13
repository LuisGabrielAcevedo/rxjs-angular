import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { tap, map, filter, first, take, takeWhile } from 'rxjs/operators';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-firts-observable',
  templateUrl: './firts-observable.component.html',
  styleUrls: ['./firts-observable.component.css']
})
export class FirtsObservableComponent implements OnInit {
  @ViewChild('grid', {static: true}) public grid: ElementRef;
  constructor() { }

  ngOnInit() {
    const observable1: Observable<any> = fromEvent(this.grid.nativeElement, 'click').pipe(
      tap(div => console.log(div)),
      map(div => {
        return [div['offsetX'], div['offsetY']]
      }),
      tap(div => console.log(div)),
      // se envia solo la primeravez
      // first(),
      // se envia hasta que se cumpla esta condicion
      // first(div => div[0] > 200)
      // se envia los primros 4 eventos
      // take(4),
      // mientras div[0] > 200 voy a estar emitiendo eventos, emite hasta que ya no se cumpla esta condicion
      takeWhile(div => div[0] > 200)
    );

    observable1.subscribe();
  }
}
