import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Comp3Component } from '../comp3/comp3.component';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit, AfterViewInit {
  userName;
  @ViewChild('box', {static: false}) box: ElementRef;
  @ViewChild(Comp3Component, {static: false}) child: Comp3Component;
  constructor(private utilityService: UtilityService, private renderer: Renderer2) {
    this.utilityService.userName.subscribe(res => {
      this.userName = res;
    })
   }
  

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {

    // First step
    // console.log('test', this.box)
    // this.box.nativeElement.style.backgroundColor = 'blue';
    // this.box.nativeElement.classList = 'boxblue';
    // this.box.nativeElement.innerHTML = 'This is test text';

    //second step
    console.log(this.child);

    // third step 

    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'green');
    this.renderer.setStyle(this.box.nativeElement, 'color', 'white');
    this.renderer.addClass(this.box.nativeElement, 'myclass');
    


  }
  // updateUserName(uname) {
  //    this.utilityService.userName.next(uname.value);
  // }

  changechildProperty()
  {
    this.child.userName = "Codeseeds";
  }

  callchildMethod()
  {
    this.child.clickme();
  }

  updateUserName(uname) {
    this.utilityService.userName.next(uname.value);
 }
}
