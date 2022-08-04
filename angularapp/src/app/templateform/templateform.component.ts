import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  defaultValue = 'HTML';
  defaultGender = 'Male';
  isShow: boolean = true;


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

  formData = {
    username: '',
    email: '',
    course: '',
    gender: ''
  };

  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form: NgForm) {
    console.log(form);

   this.formData.username = form.value.username;
   this.formData.email = form.value.email;
   this.formData.course = form.value.course;
   this.formData.gender = form.value.gender;

   this.submitted = true;
   
   alert('Submitted successfully');
   form.reset();
  }

  OnSubscribe() {
    const myservice = new NewsService()
    myservice.method();
  }
}
