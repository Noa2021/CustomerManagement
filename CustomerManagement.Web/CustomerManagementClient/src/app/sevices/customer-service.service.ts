import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerVw } from '../components/viewModels/customerVw';
import { Customer } from '../entities/customer';
import { ErrorHandleService } from './error-handle-service ';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient, private errorHandleService: ErrorHandleService) { }

  getCustomers() {
    return this.httpClient.get<CustomerVw[]>("api/CustomersApi/GetAllCustomers")
      .pipe(
        tap(_ => console.log('fetched customers')),
        catchError(this.errorHandleService.handleError('getCustomers', []))
      );
  }

  createNewCustomer(customer: Customer) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'my-auth-token'
      })
    };

    return this.httpClient.post<Customer>("api/CustomersApi/CreateCustomer", customer, httpOptions)
      .pipe(
        tap(_ => alert('לקוח נוצר בהצלחה!')),
        catchError(this.errorHandleService.handleError('createNewCustomer', []))
      );
  }
}

