import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked ,
AfterViewInit,
AfterViewChecked,
OnDestroy{

  @Input() message : string;
  
  constructor() { 
    console.log('constructor called');
  }
  
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(changes);
  }

ngOnInit() {
  console.log('ngOnInit called');

  // API : 
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Called");
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
   console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
   console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }
  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }
}
