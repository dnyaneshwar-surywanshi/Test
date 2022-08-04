import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


// @Directive({
//   selector: '[appMustMatch]',
//   providers: [{ provide: NG_VALIDATORS, useExisting: MustMatchDirective, multi: true }]
// })

@Directive({
  selector:'[appMustMatch]',
  providers: [{provide: NG_VALIDATORS,useExisting: MustMatchDirective, multi: true }]
  })
   
export class MustMatchDirective implements Validator {

 // @Input('mustMatch') mustMatch: string[] = [];
  @Input() appConfirmEqualValidator: string;
  constructor() { }

  validate(control: AbstractControl):{[key:string]: any} |null {
    const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
  
    if(controlToCompare && controlToCompare.value !==control.value){
      return { 'notEqual': true}
      }
      return null;
      }
}

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      // return null if controls haven't initialised yet
      if (!control || !matchingControl) {
        return null;
      }

      // return null if another validator has already found an error on the matchingControl
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return null;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

