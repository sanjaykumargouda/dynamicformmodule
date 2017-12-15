import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicformDirective } from './dynamicform.directive';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormButtonComponent } from './form-button/form-button.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    DynamicFormComponent
  ],
  declarations: [
    DynamicFormComponent,
    DynamicformDirective,
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent
  ]
})
export class DynamicFormModule { }
