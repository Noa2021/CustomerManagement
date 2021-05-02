import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityVw } from '../components/viewModels/cityVw';
import { ErrorHandleService } from './error-handle-service ';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CityService {
  constructor(private httpClient: HttpClient ,private errorHandleService: ErrorHandleService) { }

  getCities() {
    return this.httpClient.get<CityVw[]>("api/CitiesApi/GetAllCities")
      .pipe(
        tap(_ => console.log('fetched cities')),
        catchError(this.errorHandleService.handleError('getCities', []))
      );
  }
}
