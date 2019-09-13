import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import { FromObservableComponent } from './from-observable/from-observable.component';
import { RangeObservableComponent } from './range-observable/range-observable.component';
import { OfObservableComponent } from './of-observable/of-observable.component';
import { IntervalObservableComponent } from './interval-observable/interval-observable.component';
import { TimeObservableComponent } from './time-observable/time-observable.component';
import { FrontEventObservableComponent } from './front-event-observable/front-event-observable.component';
import { ObservablesRouting } from './observables.routing.module';
import { MapToObservableComponent } from './map-to-observable/map-to-observable.component';
import { MapObservableComponent } from './map-observable/map-observable.component';
import { FilterObservableComponent } from './filter-observable/filter-observable.component';
import { TapObservableComponent } from './tap-observable/tap-observable.component';
import { FirtsObservableComponent } from './firts-observable/firts-observable.component';

@NgModule({
    declarations: [
        CreateObservableComponent,
        FromObservableComponent,
        RangeObservableComponent,
        OfObservableComponent,
        IntervalObservableComponent,
        TimeObservableComponent,
        FrontEventObservableComponent,
        MapToObservableComponent,
        MapObservableComponent,
        FilterObservableComponent,
        TapObservableComponent,
        FirtsObservableComponent
    ],
    imports: [
      CommonModule,
      ObservablesRouting
    ],
  })
  export class ObservablesModule {}