import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicformDirective } from '../dynamicform.directive';


@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Output()formSubmit: EventEmitter<any> = new EventEmitter<any>();
  dmForm: FormGroup;
  @Input() config: any[] = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dmForm = this.createGroup();
  }

  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(ctrl => group.addControl(ctrl.name, this.fb.control(null)));
    return group;

  }

}
