import { Component, OnInit, ViewChild } from '@angular/core';
import { TestdirectiveDirective } from '../customDirective/testdirective.directive';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  userName;
  @ViewChild(TestdirectiveDirective, {static: true}) myDir: TestdirectiveDirective;
  constructor(private utilityService: UtilityService) {
    this.utilityService.userName.subscribe(res => {
      this.userName = res;
    })
   }

  ngOnInit() {
  }
  // updateUserName(uname) {
  //    this.utilityService.userName.next(uname.value);
  // }

  clickme()
  {
    alert(this.userName)
  }

  changeColor(color) {
    this.myDir.changeBg(color);
  }

  updateUserName(uname) {
    this.utilityService.userName.next(uname.value);
 }
}
