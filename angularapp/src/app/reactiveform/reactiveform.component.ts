import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { NewsService } from '../news.service';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myReactiveForm :FormGroup;
  submitted: boolean = false;
  genders = [
    {
      id: '1',
      value: 'Male'
    },
    {
      id: '2',
      value: 'Female'
    }
  ];

  notAllowedNames = ['Codemind', 'Technology'];

  constructor(private _newService: NewsService, private _notificationService: NotificationService) {
    this.createForm();
   }

  ngOnInit() {


  }

  createForm() {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, Validators.maxLength, this.NaNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.NaEmails)
      }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])

    })


      
    setTimeout(() => {
      
      this.myReactiveForm.patchValue({
        'userDetails': {
          'username': 'Codemind1122',
          'email': 'test@gmail.com'
        }
      })
    }, 5000);

  }

  OnSubmit() {
    this.submitted = true;
    console.log(this.myReactiveForm)
    this._notificationService.showError('Data not submitted successfully' , 'Registration');
  }
  OnAddSkills() {
   (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required))
  }

  NaNames(control: FormControl) {

    // var namanes = API 50
    if (this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'nameIsNotAllowed': true}
    }
    return null
  }

  NaEmails(control: FormControl) : Promise<any> | Observable<any> {

    const myResponse = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'codemindtechnology@gmail.com') {
          resolve({'emailNotAllowed': true})
        } else {
          resolve(null)
        }
      }, 5000);
    })
    return myResponse;
  }

  OnSubscribe() {
    this._newService.method();
  }
}
