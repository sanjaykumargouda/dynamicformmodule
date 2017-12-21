import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
    if(this.config.required === 'true') {
      this.group.controls[this.config.name].setValidators([Validators.required]);
    }
  }

}
