import { ProductDataComponent } from './pages/stock/product-data/product-data.component';
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
import { LoginComponent } from './pages/login/login.component';
import { OrderedListComponent } from './pages/ordered/ordered-list/ordered-list.component';
import { OrderedComponent } from './pages/ordered/ordered.component';
import { StockListComponent } from './pages/stock/stock-list/stock-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ordered', component: OrderedComponent,
    children: [
      { path: '', component: OrderedListComponent, pathMatch: 'full' },
      { path: 'order-details/:pedido', component: OrderDetailsComponent, pathMatch: 'full' }
    ]
  },
  { path: 'financial', component: FinancialComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'stock', component: StockComponent,
    children: [
      { path: '', component: StockListComponent, pathMatch: 'full' },
      { path: 'stock-details', component: StockDetailsComponent, pathMatch: 'full'},
      { path: 'product-data/:cod', component: ProductDataComponent, pathMatch: 'full'}
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
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
