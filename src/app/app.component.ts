import { Component } from '@angular/core';
import { DynamicFormComponent } from './dynamic-form/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  config: any[] = [
    {
      type: 'input',
      label: 'Full name',
      name: 'name',
      placeholder: 'Enter your name'
    },
    {
      type: 'select',
      label: 'Favourite food',
      name: 'food',
      options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
      placeholder: 'Select an option'
    },
    {
      label: 'Submit',
      name: 'submit',
      type: 'button'
    }
  ]
  constructor() {
    
  }
  formSubmitted(e) {
    console.log(e);

  }
}
