import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, Observer } from 'rxjs';

@Component({
  selector: 'app-create-observable',
  templateUrl: './create-observable.component.html',
  styleUrls: ['./create-observable.component.css']
})
export class CreateObservableComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // Para crear un observable utilizo create 
    const helloObservable: Observable<any> = Observable.create((observer) => {
      observer.next('Hello');
      setTimeout(() => {
        observer.next('World');
        observer.complete();
      }, 3000);
    });
    const observer: Observer<any> = {
      next: evt => console.log(evt),
      error: err => console.log(err),
      complete: () => console.log('Done')
    }
    // Nos suscribimos al evento y quedamos escuchando cambios
    const subscribe: Subscription = helloObservable.subscribe(observer);
    // Para desuscribirnos usamos
    // subscribe.unsubscribe();
  }
}
