import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-front-event-observable',
  templateUrl: './front-event-observable.component.html',
  styleUrls: ['./front-event-observable.component.css']
})
export class FrontEventObservableComponent implements OnInit {
  @ViewChild('button', {static: true}) public button: ElementRef;
  @ViewChild('input', {static: true}) public input: ElementRef;
  constructor() { }

  ngOnInit() {
    const observable1: Observable<any> = fromEvent(this.button.nativeElement, 'click');
    const observable2: Observable<any> = fromEvent(this.input.nativeElement, 'focus');
    const observable3: Observable<any> = fromEvent(this.input.nativeElement, 'blur');

    observable1.subscribe(event => {
      console.log('Button click');
      console.log(event);
    });

    observable2.subscribe(event => {
      console.log('Input focus');
      console.log(event);
    });

    observable3.subscribe(event => {
      console.log('Input blur');
      console.log(event);
    });
  }
}
