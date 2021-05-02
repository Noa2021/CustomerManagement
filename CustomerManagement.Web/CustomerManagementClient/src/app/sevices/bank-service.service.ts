import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityVw } from '../components/viewModels/cityVw';
import { ErrorHandleService } from './error-handle-service ';
import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Bank {
  Code: number;
  Description: string;
  Status: boolean;
}

export interface BankBranch {
  BankCode: number;
  BranchNumber: number;
  BranchName: string;
}

export interface Data {
  Banks: Bank[];
  BankBranches: BankBranch[];
}

export interface GetBankDataResponse {
  Status: string;
  Code: number;
  Data: Data;
}


@Injectable({
  providedIn: 'root'
})

export class BankService {
  constructor(private httpClient: HttpClient, private errorHandleService: ErrorHandleService) { }

  getBanksData(): Observable<GetBankDataResponse> {
    return this.httpClient.get<GetBankDataResponse>("https://www.xnes.co.il/ClosedSystemMiddlewareApi/api/generalinformation");
  }
}
