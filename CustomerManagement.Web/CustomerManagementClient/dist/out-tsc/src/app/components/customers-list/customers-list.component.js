import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CustomersListComponent = class CustomersListComponent {
    constructor(customerService) {
        this.customerService = customerService;
        this.model = {
            customers: [],
            displayedColumns: ['id', 'fullNameHe', 'fullNameEn',
                'birthDate',
                'idNumber',
                'city',
                'brunch',
                'bank',
                'accountNumber'],
            isLoading: true
        };
    }
    ngOnInit() {
        this.fetchCustomers();
    }
    fetchCustomers() {
        return this.customerService.getCustomers().subscribe((res) => {
            this.model.customers = res;
            this.model.isLoading = false;
        });
    }
};
CustomersListComponent = __decorate([
    Component({
        selector: 'app-customers-list',
        templateUrl: './customers-list.component.html',
        styleUrls: ['./customers-list.component.scss']
    })
], CustomersListComponent);
export { CustomersListComponent };
//# sourceMappingURL=customers-list.component.js.map