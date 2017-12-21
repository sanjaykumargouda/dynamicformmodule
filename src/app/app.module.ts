import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormModule } from 'app/dynamic-form/dynamic-form.module';
import { FormSelectComponent } from './dynamic-form/form-select/form-select.component';
import { FormInputComponent } from './dynamic-form/form-input/form-input.component';
import { FormButtonComponent } from './dynamic-form/form-button/form-button.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DynamicFormModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    FormInputComponent,
    FormSelectComponent,
    FormButtonComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
