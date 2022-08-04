import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  userName ;
  constructor(private utilityService: UtilityService) {
    this.utilityService.userName.subscribe(res => {
      this.userName = res;
    })
   }

  ngOnInit() {
  }

  updateUserName(uname) {
   this.utilityService.userName.next(uname.value);
  }

}
