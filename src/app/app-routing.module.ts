import { StockDetailsComponent } from './pages/stock/stock-details/stock-details.component';
import { OrderDetailsComponent } from './pages/ordered/order-details/order-details.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { StockComponent } from './pages/stock/stock.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { OrderedComponent } from './pages/ordered/ordered.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ordered', component: OrderedComponent,
    children: [
      { path: 'order-details', component: OrderDetailsComponent }
    ]
  },
  { path: 'financial', component: FinancialComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'stock', component: StockComponent,
    children: [
      { path: 'stock-details', component: StockDetailsComponent }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
