import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  user = '1';
  constructor() { }

  ngOnInit() {
    localStorage.setItem('SeesionUser', this.user ) // log in 
  }

  logout() {
    localStorage.removeItem('SeesionUser');
  }
}
