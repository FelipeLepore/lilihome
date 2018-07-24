import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxToggleModule } from "ngx-toggle";
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { OrderedListComponent } from './pages/ordered/ordered-list/ordered-list.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TitleComponent } from './components/title/title.component';
import { OrderDetailsComponent } from './pages/ordered/order-details/order-details.component';
import { StockDetailsComponent } from './pages/stock/stock-details/stock-details.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductDataComponent } from './pages/stock/product-data/product-data.component';
import { OrderedComponent } from './pages/ordered/ordered.component';
import { StockComponent } from './pages/stock/stock.component';
import { StockListComponent } from './pages/stock/stock-list/stock-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MenuComponent,
    HeaderComponent,
    StockListComponent,
    OrderedComponent,
    OrderedListComponent,
    FinancialComponent,
    PaymentsComponent,
    BreadcrumbComponent,
    TitleComponent,
    OrderDetailsComponent,
    StockDetailsComponent,
    LoginComponent,
    ProductDataComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
