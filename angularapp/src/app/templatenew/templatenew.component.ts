import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatenew',
  templateUrl: './templatenew.component.html',
  styleUrls: ['./templatenew.component.css']
})
export class TemplatenewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  login(form: NgForm) {
    console.log(form.value, form.valid);
  }
}
