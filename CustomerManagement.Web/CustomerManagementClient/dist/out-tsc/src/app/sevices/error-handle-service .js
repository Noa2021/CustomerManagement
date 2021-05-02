import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
let ErrorHandleService = class ErrorHandleService {
    constructor() { }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
};
ErrorHandleService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ErrorHandleService);
export { ErrorHandleService };
//# sourceMappingURL=error-handle-service%20.js.map