import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { CustomersListComponent } from './components/customers-list/customers-list.component';
import { HomeComponent } from './components/home/home.component';
const routes = [
    { path: 'home', component: HomeComponent },
    { path: 'createCustomer', component: CreateCustomerComponent },
    { path: 'customersList', component: CustomersListComponent },
    { path: '*', redirectTo: '/home' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map