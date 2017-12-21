import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {
  config;
  group: FormGroup;

  constructor() { }

  ngOnInit() {
    // need to add custom validator based on config json
    if (this.config.required === 'true') {
      this.group.controls[this.config.name].setValidators([Validators.required]);
    }
  }

  numberValidation() {
    console.log(233);
  }

}
