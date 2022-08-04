import { Component, OnInit } from '@angular/core';
import {  of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

 presentDate = new Date();
 value = 'This is example of pipe';

 myObservable: any;
 price : number = 20000;

 jsonData = {
   id: 'one', name: 'codemind'
 }

 digits : number = 1000;
  constructor() {
    
   }

  ngOnInit() {

    this.myObservable = of('Some text').pipe(
      delay(3000)
    )
   
  }

}
