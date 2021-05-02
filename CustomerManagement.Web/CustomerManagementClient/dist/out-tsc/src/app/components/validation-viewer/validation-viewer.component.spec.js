import { __awaiter } from "tslib";
import { TestBed } from '@angular/core/testing';
import { ValidationViewerComponent } from './validation-viewer.component';
describe('ValidationViewerComponent', () => {
    let component;
    let fixture;
    beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
        yield TestBed.configureTestingModule({
            declarations: [ValidationViewerComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ValidationViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=validation-viewer.component.spec.js.map