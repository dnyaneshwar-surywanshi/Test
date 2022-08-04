import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements 
OnInit,
 OnChanges, 
 DoCheck, 
 AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked,
 OnDestroy
  {

  @Input() message : string;
  colorVal = 'blue';
  color : 'color'
  constructor() {
    console.log('Constructor called');
   }
  

  ngOnChanges(changes: SimpleChanges): void {
   
     console.log('ngOnChanges called');
     //console.log('Current Value', changes.message.currentValue);
     //console.log('Previous Value', changes.message.previousValue);
     console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called');
    
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  //it will call once change happen in content value
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  //this life cycle hook call after my component fully initilized 
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called')
  }

}
