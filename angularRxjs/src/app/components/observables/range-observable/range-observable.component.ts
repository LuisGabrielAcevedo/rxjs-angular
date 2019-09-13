import { Component, OnInit } from '@angular/core';
import { Observable, range, Subscription } from 'rxjs';

@Component({
  selector: 'app-range-observable',
  templateUrl: './range-observable.component.html',
  styleUrls: ['./range-observable.component.css']
})
export class RangeObservableComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  // Range devuelve una secuencia de numeros con el intervalo especificado
  const observable: Observable<number> = range(1, 10);
  const subscription: Subscription = observable.subscribe(data => {
    console.log(data);
  });
}
}
