import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription, timer, observable } from 'rxjs';

@Component({
  selector: 'app-interval-observable',
  templateUrl: './interval-observable.component.html',
  styleUrls: ['./interval-observable.component.css']
})
export class IntervalObservableComponent implements OnInit {
  public subscription3: Subscription;
  constructor() { }

  ngOnInit() {
    // Interval permite crear ciclos de tiempo
    const observable1: Observable<any> = interval(500);
    // Timer dispara la funcion next despues de un momento de tiempo
    const observable2: Observable<any> = timer(3000);
    // Tambien podemos disparar secuencias de tiempo despues de un momento
    const observable3: Observable<any> = timer(500, 500);
    const observable4: Observable<any> = timer(10000);

    const subscription1: Subscription = observable1.subscribe(value => {
      console.log(`Observable1:  1 - ${value}`);
    });

    const subscription2: Subscription = observable2.subscribe(() => {
      console.log(`Observable2: Close observable 1`);
      subscription1.unsubscribe();
      this.subscription3 = observable3.subscribe(value => {
        console.log(`Observable3: 3 - ${value}`);
      });
    });

    const subscription4: Subscription = observable4.subscribe(value => {
      console.log(`Observable4: Close observable 3`);
      this.subscription3.unsubscribe();
    });
  }

}
