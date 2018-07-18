import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NgxToggleModule } from "ngx-toggle";
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { StockComponent } from './pages/stock/stock.component';
import { OrderedComponent } from './pages/ordered/ordered.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TitleComponent } from './components/title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    MenuComponent,
    HeaderComponent,
    StockComponent,
    OrderedComponent,
    FinancialComponent,
    PaymentsComponent,
    BreadcrumbComponent,
    TitleComponent
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
