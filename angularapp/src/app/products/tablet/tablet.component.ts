import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-tablet',
  templateUrl: './tablet.component.html',
  styleUrls: ['./tablet.component.css']
})
export class TabletComponent implements OnInit {
  userName;
  constructor( private postservice: PostService) { 
    this.postservice.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit() {
  }

   updateUsername(uname) {
   // this.userName = uname.value;

   this.postservice.userName.next(uname.value);
  }
}
