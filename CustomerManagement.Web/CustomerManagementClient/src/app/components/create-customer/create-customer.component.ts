import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Customer } from '../../entities/customer';
import { Bank, BankBranch, BankService, GetBankDataResponse } from '../../sevices/bank-service.service';
import { CustomerService } from '../../sevices/customer-service.service';
import { CityService } from '../../sevices/city-service.service';
import { CityVw } from '../viewModels/cityVw';

export interface model {
  banksList: Bank[];
  bankBrunchesList: BankBranch[];
  citiesList: CityVw[];
}

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss']
})

export class CreateCustomerComponent implements OnInit {

  public isSubmitted: boolean;
  public customerForm: FormGroup;
  public model: model = {} as model

  constructor(
    private fb: FormBuilder,
    private bankService: BankService,
    private customerService: CustomerService,
    private cityService: CityService) {
  }

  ngOnInit() {
    this.customerForm = this.buildForm();
    this.fetchBanks();
    this.fetchCities();
  }

  buildForm(): FormGroup {
    return this.fb.group({
      fullNameHe: new FormControl(
        "",
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern("^[-'\u0590-\u05fe ]+$")
        ]
      ),
      fullNameEn: new FormControl(
        "",
        [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern("^[-'a-zA-Z ]+$")
        ]
      ),
      birthDate: new FormControl(
        "",
        [
          Validators.required
        ]
      ),
      idNumber: new FormControl(
        "",
        [
          Validators.required,
          Validators.maxLength(9),
          Validators.minLength(9)
        ]
      ),
      city: new FormControl(
        "",
        [
          Validators.required,
        ]
      ),
      bank: new FormControl(
        "",
        [
          Validators.required,
        ]
      ),
      brunch: new FormControl(
        { value: "", disabled: true },
        [
          Validators.required,
        ]
      ),
      accountNumber: new FormControl(
        "",
        [
          Validators.required,
          Validators.maxLength(10),
        ]
      ),
    });
  }

  fetchBanks() {
    return this.bankService.getBanksData().subscribe((res: GetBankDataResponse) => {
      this.model.banksList = res.Data.Banks;
    })
  }

  fetchBrunches() {
    return this.bankService.getBanksData().subscribe((res: GetBankDataResponse) => {
      var selectedbank: number = this.customerForm.get('bank')?.value;
      this.customerForm.get('brunch')?.enable();

      this.model.bankBrunchesList = res.Data.BankBranches.filter(x => x.BankCode == selectedbank);
    })
  }

  fetchCities() {
    return this.cityService.getCities().subscribe((cities: CityVw[]) => {
      this.model.citiesList = cities;
    })
  }

  onSubmit() {

    this.isSubmitted = true;

    if (this.customerForm.invalid) {
      alert("הטופס אינו תקין")
    }
    else {
      var customer: Customer = {
        FullNameHe: this.customerForm.get('fullNameHe')?.value,
        FullNameEn: this.customerForm.get('fullNameEn')?.value,
        BirthDate: this.customerForm.get('birthDate')?.value,
        IdNumber: this.customerForm.get('idNumber')?.value,
        City: this.customerForm.get('city')?.value,
        Brunch: this.customerForm.get('brunch')?.value,
        Bank: this.customerForm.get('bank')?.value,
        AccountNumber: this.customerForm.get('accountNumber')?.value
      }

      this.customerService.createNewCustomer(customer).subscribe((res: any) => {
        this.customerForm.reset();
      })
    }
  }
}   
