import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  userName;
  constructor(private router: Router , private postservice: PostService) { 
    this.postservice.userName.subscribe(res => {
      this.userName = res;
    })
  }

  ngOnInit() {
  }

  back() {
  this.router.navigate(['product']);
  }

  updateUsername(uname) {
   // this.userName = uname.value;

   this.postservice.userName.next(uname.value);
  }
}
