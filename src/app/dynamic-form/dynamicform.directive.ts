import { Directive, ComponentFactoryResolver, Input, ViewContainerRef, OnInit } from '@angular/core';
import { FormInputComponent } from './form-input/form-input.component';
import { FormSelectComponent } from './form-select/form-select.component';
import { FormButtonComponent } from './form-button/form-button.component';
import { FormGroup } from '@angular/forms';

const components = {
  input: FormInputComponent,
  select: FormSelectComponent,
  button: FormButtonComponent
}

@Directive({
  selector: '[appDynamicform]'
})
export class DynamicformDirective implements OnInit {
  // resolver: any;
  @Input() config;
  @Input() group: FormGroup;
  private comp;

  constructor(public resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  ngOnInit() {
    const component = components[this.config.type];
    const factory = this.resolver.resolveComponentFactory(component);
    this.comp = this.container.createComponent(factory);
    this.comp.instance.group = this.group;
    this.comp.instance.config = this.config;
  }
}
