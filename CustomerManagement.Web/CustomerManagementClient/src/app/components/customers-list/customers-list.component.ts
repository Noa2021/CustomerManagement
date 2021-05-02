import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../sevices/customer-service.service';
import { CustomerVw } from '../viewModels/customerVw';

export interface model {
  customers: CustomerVw[];
  displayedColumns: string[];
  isLoading: boolean;
}


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  public model: model = {
    customers: [],
    displayedColumns: ['id', 'fullNameHe','fullNameEn',
      'birthDate',
      'idNumber',
      'city',
      'brunch',
      'bank',
      'accountNumber'],
    isLoading: true
  }

  ngOnInit(): void {
    this.fetchCustomers();
  }

  fetchCustomers() {

    return this.customerService.getCustomers().subscribe((res: CustomerVw[]) => {
      this.model.customers = res;
      this.model.isLoading = false;
    })
  }
}
