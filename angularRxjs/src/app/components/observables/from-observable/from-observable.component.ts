import { Component, OnInit } from '@angular/core';
import { Observable, from, Subscription } from 'rxjs';

@Component({
  selector: 'app-from-observable',
  templateUrl: './from-observable.component.html',
  styleUrls: ['./from-observable.component.css']
})
export class FromObservableComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  const array: number[] = [1, 2, 3, 4, 5];
  const string: string = 'My string';
  const promise: Promise<any> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise resolve'), 3000);
  });
  // From toma el array y hace next de cada valor
  const observableFromArray: Observable<number> = from(array);
  // From toma el string y hace next de cada caracter
  const observableFromString: Observable<string> = from(string);
  // From toma la promesa y hace next cuando a promesa se resuelve
  const observableFromPromise: Observable<string> = from(promise);

  const subscription1: Subscription = observableFromArray.subscribe(data => {
    console.log(data);
  });
  const subscription2: Subscription = observableFromString.subscribe(data => {
    console.log(data);
  });
  const subscription3: Subscription = observableFromPromise.subscribe(data => {
    console.log(data);
  });
}
}
