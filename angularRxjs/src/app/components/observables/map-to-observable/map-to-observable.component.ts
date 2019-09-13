import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-map-to-observable',
  templateUrl: './map-to-observable.component.html',
  styleUrls: ['./map-to-observable.component.css']
})
export class MapToObservableComponent implements OnInit {
  @ViewChild('button', {static: true}) public button: ElementRef;
  constructor() { }

  ngOnInit() {
    // MapTo transforma la salida devolviendo siempre el mismo valor
    const observable1: Observable<any> = fromEvent(this.button.nativeElement, 'click').pipe(
      mapTo('click')
    );

    observable1.subscribe(event => {
      console.log(event);
    });
  }

}
