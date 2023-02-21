import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Attribute, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

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

  @Input() userid : number;
  @Input() inputprop: any;
  @Output() foodevent: EventEmitter<string> = new EventEmitter<string>();
  @Input() parentData: string;
  
  colorVal = 'blue';
  color : 'color'
  constructor(@Attribute('inputprop') t: string) {
    console.log('ljsjslkj',t);
   }
  
   addtofood(value) {
    this.foodevent.emit(value);
   }
  ngOnChanges(changes: SimpleChanges): void {
   
     console.log('ngOnChanges called');
     for (const propname in changes) {
       const prop = changes[propname];
       const { previousValue, currentValue, firstChange} = prop;
       console.log(`Prop name ${propname}`)
       console.log(`Prev value ${previousValue}`); 
       console.log(`Current value ${currentValue}`); 
       console.log(`First chnage ${firstChange}`);
       console.log("------------") 

     }
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
