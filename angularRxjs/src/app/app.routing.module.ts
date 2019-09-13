import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'observables',
        pathMatch: 'full'
    },
    {
        path: 'observables',
        loadChildren: './components/observables/observables.module#ObservablesModule'
    },
    {
        path: '**',
        redirectTo: 'observables'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }