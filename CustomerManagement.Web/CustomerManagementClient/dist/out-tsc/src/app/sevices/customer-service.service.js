import { __decorate } from "tslib";
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
let CustomerService = class CustomerService {
    constructor(httpClient, errorHandleService) {
        this.httpClient = httpClient;
        this.errorHandleService = errorHandleService;
    }
    getCustomers() {
        return this.httpClient.get("api/CustomersApi/GetAllCustomers")
            .pipe(tap(_ => console.log('fetched customers')), catchError(this.errorHandleService.handleError('getCustomers', [])));
    }
    createNewCustomer(customer) {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'my-auth-token'
            })
        };
        return this.httpClient.post("api/CustomersApi/CreateCustomer", customer, httpOptions)
            .pipe(tap(_ => alert('לקוח נוצר בהצלחה!')), catchError(this.errorHandleService.handleError('createNewCustomer', [])));
    }
};
CustomerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CustomerService);
export { CustomerService };
//# sourceMappingURL=customer-service.service.js.map