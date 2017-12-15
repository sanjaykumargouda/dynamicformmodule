import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-form-button',
  templateUrl: './form-button.component.html',
  styleUrls: ['./form-button.component.css']
})
export class FormButtonComponent implements OnInit {
  config;
  group: FormGroup
  constructor() { }

  ngOnInit() {
  }

}
