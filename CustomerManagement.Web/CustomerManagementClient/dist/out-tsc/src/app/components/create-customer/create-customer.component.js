import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
let CreateCustomerComponent = class CreateCustomerComponent {
    constructor(fb, bankService, customerService, cityService) {
        this.fb = fb;
        this.bankService = bankService;
        this.customerService = customerService;
        this.cityService = cityService;
        this.model = {};
    }
    ngOnInit() {
        this.customerForm = this.buildForm();
        this.fetchBanks();
        this.fetchCities();
    }
    buildForm() {
        return this.fb.group({
            fullNameHe: new FormControl("", [
                Validators.required,
                Validators.maxLength(20),
                Validators.pattern("^[-'\u0590-\u05fe ]+$")
            ]),
            fullNameEn: new FormControl("", [
                Validators.required,
                Validators.maxLength(15),
                Validators.pattern("^[-'a-zA-Z ]+$")
            ]),
            birthDate: new FormControl("", [
                Validators.required
            ]),
            idNumber: new FormControl("", [
                Validators.required,
                Validators.maxLength(9),
                Validators.minLength(9)
            ]),
            city: new FormControl("", [
                Validators.required,
            ]),
            bank: new FormControl("", [
                Validators.required,
            ]),
            brunch: new FormControl({ value: "", disabled: true }, [
                Validators.required,
            ]),
            accountNumber: new FormControl("", [
                Validators.required,
                Validators.maxLength(10),
            ]),
        });
    }
    fetchBanks() {
        return this.bankService.getBanksData().subscribe((res) => {
            this.model.banksList = res.Data.Banks;
        });
    }
    fetchBrunches() {
        return this.bankService.getBanksData().subscribe((res) => {
            var _a, _b;
            var selectedbank = (_a = this.customerForm.get('bank')) === null || _a === void 0 ? void 0 : _a.value;
            (_b = this.customerForm.get('brunch')) === null || _b === void 0 ? void 0 : _b.enable();
            this.model.bankBrunchesList = res.Data.BankBranches.filter(x => x.BankCode == selectedbank);
        });
    }
    fetchCities() {
        return this.cityService.getCities().subscribe((cities) => {
            this.model.citiesList = cities;
        });
    }
    onSubmit() {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        this.isSubmitted = true;
        if (this.customerForm.invalid) {
            alert("הטופס אינו תקין");
        }
        else {
            var customer = {
                FullNameHe: (_a = this.customerForm.get('fullNameHe')) === null || _a === void 0 ? void 0 : _a.value,
                FullNameEn: (_b = this.customerForm.get('fullNameEn')) === null || _b === void 0 ? void 0 : _b.value,
                BirthDate: (_c = this.customerForm.get('birthDate')) === null || _c === void 0 ? void 0 : _c.value,
                IdNumber: (_d = this.customerForm.get('idNumber')) === null || _d === void 0 ? void 0 : _d.value,
                City: (_e = this.customerForm.get('city')) === null || _e === void 0 ? void 0 : _e.value,
                Brunch: (_f = this.customerForm.get('brunch')) === null || _f === void 0 ? void 0 : _f.value,
                Bank: (_g = this.customerForm.get('bank')) === null || _g === void 0 ? void 0 : _g.value,
                AccountNumber: (_h = this.customerForm.get('accountNumber')) === null || _h === void 0 ? void 0 : _h.value
            };
            this.customerService.createNewCustomer(customer).subscribe((res) => {
                this.customerForm.reset();
            });
        }
    }
};
CreateCustomerComponent = __decorate([
    Component({
        selector: 'app-create-customer',
        templateUrl: './create-customer.component.html',
        styleUrls: ['./create-customer.component.scss']
    })
], CreateCustomerComponent);
export { CreateCustomerComponent };
//# sourceMappingURL=create-customer.component.js.map