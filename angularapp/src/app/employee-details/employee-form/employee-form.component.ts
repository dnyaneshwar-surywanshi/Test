import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { NotificationService } from 'src/app/notification.service';
import { Epmloyee } from 'src/app/shared/employee.model';
import { EmployeeService } from 'src/app/shared/employee.service';

 @Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
 })
 export class EmployeeFormComponent implements OnInit {
  constructor(public empService:EmployeeService, public toast:NotificationService) { }
  @ViewChild('checkbox1' , {static: false}) checkBox:ElementRef;
  isSlide:string='off';
  ngOnInit() {
   
    this.empService.getDesignations().subscribe(res => {
      this.empService.listDesignation = res;
    })
   // const brodcastvideo = interval(1000);
  }
  submit(form:NgForm)
  {
    debugger;
    this.empService.employeeData.isMarried=form.value.isMarried==true?1:0;
    this.empService.employeeData.isActive=form.value.isActive==true?1:0;
    if(this.empService.employeeData.id==0)
      this.insertEmployee(form);
     else
     this.updateEployee(form);
  }
  insertEmployee(myform:NgForm)
  {  this.empService.saveEmployee().subscribe(d=> {
     this.resetForm(myform);
     this.refereshData();
     this.toast.showSuccess('Sucess','Record Saved');
    });
  }
  updateEployee(myform:NgForm)
  {
    this.empService.updateEmployee().subscribe(d=> {
      this.resetForm(myform);
      this.refereshData();
     // this.toast.warning('Sucess','Record Updated');
    });
  }
  resetForm(myform:NgForm)
  {
    myform.form.reset(myform.value);
    this.empService.employeeData=new Epmloyee();
    this.hideShowSlide();
  }
  refereshData()
  {
    this.empService.getEmployees().subscribe(res=>{
      this.empService.listEmployee=res;
    });
  }
  hideShowSlide()
  {
    if(this.checkBox.nativeElement.checked)
    {
      this.checkBox.nativeElement.checked=false;
      this.isSlide='off';
    }
    else
    {
      this.checkBox.nativeElement.checked=true;
      this.isSlide='on';
    }
  }
 }