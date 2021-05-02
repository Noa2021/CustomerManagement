import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'validation-viewer',
  templateUrl: './validation-viewer.component.html',
  styleUrls: ['./validation-viewer.component.scss']
})

export class ValidationViewerComponent implements OnInit {
  constructor() { }

  @Input() control: FormControl;
  @Input() isSubmitted: boolean;

  
  ngOnInit(): void {
  }

}
