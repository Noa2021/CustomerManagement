import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationViewerComponent } from './validation-viewer.component';

describe('ValidationViewerComponent', () => {
  let component: ValidationViewerComponent;
  let fixture: ComponentFixture<ValidationViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
