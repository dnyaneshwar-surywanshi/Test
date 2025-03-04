import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { element } from 'protractor';
import { from, interval, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Epmloyee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  myarr= [1, 2, 3];
  sub1: Subscription;
  constructor(public empService:EmployeeService, public datepipe:DatePipe, public toast:ToastrService) { }
  @ViewChild(EmployeeFormComponent , {static: false}) emp: EmployeeFormComponent;
  ngOnInit() {
   
  this.empService.getEmployees().subscribe(res => {
    this.empService.listEmployee = res;
  })

//     this.empService.getEmployees();
// // From 
//    const custFrom= from(this.myarr);
//    custFrom.subscribe(res => {
//     console.log('cust obser', res);
//   })


//   // of 

//   const custOf = of(this.myarr);
//   custOf.subscribe(res => {
//     console.log('cust obser', res);
//   })


  // map () operator manipulate the obsevable data.

  //pipe() 

  const brodCastVideos = interval(1000);

 this.sub1 = brodCastVideos.pipe(
  map(data => data * 2)
 ).subscribe(res => {
    console.log('Multi' + res);
  })


  setTimeout(() => {
    this.sub1.unsubscribe();
  }, 10000);

  }
  populateEmployee(selecetedEmployee:Epmloyee)
  {
    let df=this.datepipe.transform(selecetedEmployee.doj,'yyyy-MM-dd');
    selecetedEmployee.doj=df;
    this.empService.employeeData=selecetedEmployee;
    
    if(this.emp.isSlide==='off')
    {
     this.emp.hideShowSlide();
    }
  }
  delete(id:number)
  {
    if(confirm('Are you really want to delete this record?'))
    {
      this.empService.deleteEmployee(id).subscribe(data=> {
        this.empService.getEmployees().subscribe(data=>{
          this.empService.listEmployee=data;
          this.toast.error('Sucess','Record Deleted');
        });
      },
      err=>{
      });
    }
  }

 
 }