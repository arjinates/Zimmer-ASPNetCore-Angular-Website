import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderDetailedComponent } from '../order-detailed/order-detailed.component';
import { Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: OrdersComponent},
  {path: ':id', component: OrderDetailedComponent, data: {breadcrumb: {alias: 'OrderDetailed'}}}
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OrdersRoutingModule { }
