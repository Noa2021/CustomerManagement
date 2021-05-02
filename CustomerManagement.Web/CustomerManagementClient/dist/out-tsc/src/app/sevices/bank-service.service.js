import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let BankService = class BankService {
    constructor(httpClient, errorHandleService) {
        this.httpClient = httpClient;
        this.errorHandleService = errorHandleService;
    }
    getBanksData() {
        return this.httpClient.get("https://www.xnes.co.il/ClosedSystemMiddlewareApi/api/generalinformation");
    }
};
BankService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], BankService);
export { BankService };
//# sourceMappingURL=bank-service.service.js.map