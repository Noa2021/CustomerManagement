import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let ValidationViewerComponent = class ValidationViewerComponent {
    constructor() { }
    ngOnInit() {
    }
};
__decorate([
    Input()
], ValidationViewerComponent.prototype, "control", void 0);
__decorate([
    Input()
], ValidationViewerComponent.prototype, "isSubmitted", void 0);
ValidationViewerComponent = __decorate([
    Component({
        selector: 'validation-viewer',
        templateUrl: './validation-viewer.component.html',
        styleUrls: ['./validation-viewer.component.scss']
    })
], ValidationViewerComponent);
export { ValidationViewerComponent };
//# sourceMappingURL=validation-viewer.component.js.map