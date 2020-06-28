import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'item',
        component: ItemComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
