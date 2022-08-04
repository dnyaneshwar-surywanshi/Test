import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  templateUrl: './ngclass.component.html',
  styleUrls: ['./ngclass.component.css']
})
export class NgclassComponent implements OnInit {

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

  ngOnInit() {
  }

}
