import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
let CityService = class CityService {
    constructor(httpClient, errorHandleService) {
        this.httpClient = httpClient;
        this.errorHandleService = errorHandleService;
    }
    getCities() {
        return this.httpClient.get("api/CitiesApi/GetAllCities")
            .pipe(tap(_ => console.log('fetched cities')), catchError(this.errorHandleService.handleError('getCities', [])));
    }
};
CityService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], CityService);
export { CityService };
//# sourceMappingURL=city-service.service.js.map