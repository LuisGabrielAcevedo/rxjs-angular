import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';

@Component({
  selector: 'app-of-observable',
  templateUrl: './of-observable.component.html',
  styleUrls: ['./of-observable.component.css']
})
export class OfObservableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Of crea secuencia de observables a partir de cualquier tipo de dato
    const observable: Observable<any> = of(
      [1, 2 ,3],
      'Hello world',
      () => 'Hello world',
      { name: 'Gabiel'}
    );

    const subscription: Subscription = observable.subscribe(data => {
      console.log(data);
    });
  }
}
