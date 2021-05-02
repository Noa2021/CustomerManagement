import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'createCustomer', component: CreateCustomerComponent },
  { path: 'customersList', component: CustomersListComponent },
  { path: '*', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
