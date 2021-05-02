import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValidationViewerComponent } from './components/validation-viewer/validation-viewer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCustomerComponent,
    CustomersListComponent,
    ValidationViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
