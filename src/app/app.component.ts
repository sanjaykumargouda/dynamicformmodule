import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  // testForm: FormGroup;
  config: any[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      required: 'true',
      placeholder: 'Enter your name'
    },
    {
      type: 'input',
      label: 'Last name',
      name: 'lname',
      required: 'false',
      placeholder: 'Enter your last name'
    },
    {
      type: 'input',
      label: 'Phone Number',
      name: 'cell',
      required: 'false',
      placeholder: 'Enter your phone number'
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      required: 'true',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ]
  constructor(/* private fb: FormBuilder */) {
  }
  ngOnInit() {
   /* this.testForm = this.fb.group({
    user: new FormControl(null, Validators.required),
    pass: new FormControl(null, Validators.required)
   }) */
  }
  /* testFormSubmit(val) {
    console.log(val, 'test');
  }*/
  
  formSubmitted(e) {
    console.log(e);
  }
}
