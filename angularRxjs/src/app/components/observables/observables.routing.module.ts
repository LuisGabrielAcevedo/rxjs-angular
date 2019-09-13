  
import { Routes, RouterModule } from '@angular/router';
import { CreateObservableComponent } from './create-observable/create-observable.component';
import { FromObservableComponent } from './from-observable/from-observable.component';
import { RangeObservableComponent } from './range-observable/range-observable.component';
import { FrontEventObservableComponent } from './front-event-observable/front-event-observable.component';
import { IntervalObservableComponent } from './interval-observable/interval-observable.component';
import { OfObservableComponent } from './of-observable/of-observable.component';
import { TimeObservableComponent } from './time-observable/time-observable.component';
import { MapToObservableComponent } from './map-to-observable/map-to-observable.component';
import { MapObservableComponent } from './map-observable/map-observable.component';
import { FilterObservableComponent } from './filter-observable/filter-observable.component';
import { TapObservableComponent } from './tap-observable/tap-observable.component';
import { FirtsObservableComponent } from './firts-observable/firts-observable.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'create',
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: CreateObservableComponent
  },
  {
    path: 'from',
    component: FromObservableComponent
  },
  {
    path: 'from-event',
    component: FrontEventObservableComponent
  },
  {
    path: 'interval',
    component: IntervalObservableComponent
  },
  {
    path: 'of',
    component: OfObservableComponent
  },
  {
    path: 'range',
    component: RangeObservableComponent
  },
  {
    path: 'time',
    component: TimeObservableComponent
  },
  {
    path: 'map-to',
    component: MapToObservableComponent
  },
  {
    path: 'map',
    component: MapObservableComponent
  },
  {
    path: 'filter',
    component: FilterObservableComponent
  },
  {
    path: 'tap',
    component: TapObservableComponent
  },
  {
    path: 'first',
    component: FirtsObservableComponent
  }
];

export const ObservablesRouting = RouterModule.forChild(routes);