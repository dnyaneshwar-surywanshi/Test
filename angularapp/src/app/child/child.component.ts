import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DemoService } from '../demo.service';
import { MustMatchDirective } from '../must-match.directive';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
 
  notAllowedNames = ['Codemind', 'Technology'];
  maxDate = '2099-08-28';
  minDate = new Date();
  defaultValue = 'Angular';
  defaultGender = 'Male';
  genders = [
    { id: '1', value: 'Male'},
    { id: '2', value: 'Female'}
  ]

  submitted: boolean = false;
  isActive : boolean = true;
  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  }

  @Input() employeeName : number;
  @Output() thanks = new EventEmitter<any>();
  count : number = 10;
  person = {
    firstname : 'jack',
    lastname : 'sparow',
    salary : '100000'
  }

  people: any[] = [
    {
      "name": "Jack",
      "country": 'UK'
    },
    {
      "name": "Sumit",
      "country": 'USA'
    },
    {
      "name": "Anup",
      "country": 'HK'
    },
    {
      "name": "Codemind",
      "country": 'UK'
    },
    {
      "name": "Surya",
      "country": 'USA'
    }
  ];

  myReactiveForm: FormGroup;
  @Input() data: any;
  constructor() { 
 this.createForm();
  }

  ngOnInit() {
    console.log(this.employeeName);
  }

  createForm()
  {
    this.myReactiveForm = new FormGroup({

      'userDetails' : new FormGroup({
        'username': new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.NaEmails)
      }),     
      'gender': new FormControl('Male'),
      'course': new FormControl('Angular'),
      'date': new FormControl(null),
      'password': new FormControl(null, [Validators.required,Validators.minLength(6)]),
      'confirm_password': new FormControl(null, Validators.required),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    });

    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'userDetails' :{
    //       'username': 'Codemind1122',
    //       'email': 'test@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender': 'Male',
    //     'date': new Date(),
    //     'password': '1234567',
    //     'confirm_password': '1234567',
    //     'skills': [
    //       'Azure'
    //     ]
    //   })
    // }, 1500);

    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({
    //     'userDetails' :{
    //       'email': 'test@gmail.com'
    //     }
    //   })
    // }, 1500);


    
  }
  sendData()
  {
    this.thanks.emit(this.person);
  }

// All is this method
onPasswordChange() {
  if (this.confirm_password.value == this.password.value) {
    this.confirm_password.setErrors(null);
  } else {
    this.confirm_password.setErrors({ mismatch: true });
  }
}

// getting the form control elements
get password(): AbstractControl {
  return this.myReactiveForm.controls['password'];
}

get confirm_password(): AbstractControl {
  return this.myReactiveForm.controls['confirm_password'];
}

  OnSubmit() {
    this.submitted = true;
    console.log(this.myReactiveForm);
    //console.log(form.value.userDetail.email);
    // console.log(form.value.course);
     
    // this.formData.username = form.value.username;
    // this.formData.email = form.value.email;
    // this.formData.course = form.value.course;
    // this.formData.gender = form.value.gender;

    this.myReactiveForm.reset({
      'userDetails' :{
              'username': '',
              'email': ''
            },
            'course': 'Angular',
            'gender': 'Male',
            'date': new Date(),
            'password': '',
            'confirm_password': '',
            'skills': [
              ''
            ]
    });
  }
  OnAddSkills() {
   (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }
  OnRemoveSkills(index: number) : void {
    (<FormArray> this.myReactiveForm.get('skills')).removeAt(0);
  }

  get email() { return this.myReactiveForm.get('userDetails.email').value; }

  NaNames(control: FormControl) {
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'nameIsNotAllowed': true}
    }
    return null;
  }

  NaEmails(control: FormControl) : Promise<any> | Observable<any> {
    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindtechnology@gmail.com') {
           
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 3000);
    })
    return myResponse;
  }

  OnMethod() {
    // const service = new DemoService();
    // service.method();
  }

}
