import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit , OnChanges, DoCheck {

  @Input() parentData: string;
  @Input() product: Product
  people : any[] = [
    {
      "name" : 'Jack',
      "country": 'UK'
    },
    {
      "name" : 'Sumit',
      "country": 'USA'
    },
    {
      "name": 'Anup',
      "country": 'HK'
    },
    {
      "name" : 'Dnynaesh',
      "country": 'UK'
    },
    {
      "name": 'Codemind',
      "country" : 'USA'
    }
  ]
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.parentData);
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit() {
  }
  ngDoCheck(): void {
    console.log('ngDoCheck called', this.product)
   }
}
