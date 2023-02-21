import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pwdgenrate',
  templateUrl: './pwdgenrate.component.html',
  styleUrls: ['./pwdgenrate.component.css']
})
export class PwdgenrateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  includeLetters = false;
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onButtonClick() {
    console.log(this.includeLetters);
    this.password = 'MY PASSWORD!!!';
  }
}
