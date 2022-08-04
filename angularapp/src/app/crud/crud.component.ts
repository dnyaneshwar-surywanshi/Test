import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  posts: any[]; 
  constructor(private utilityService: UtilityService) { }

  ngOnInit() {

    this.utilityService.getPost().subscribe((res: any) => {
      this.posts = res; 
    })
    
  }

  createPost(input: HTMLInputElement) {  
    let post = { title: input.value };  
    input.value = '';  
    this.utilityService.createPost(post).subscribe((res: any) => {
      post['id'] = res.id;  
      this.posts.splice(0, 0, post); 
      console.log(res); 
    })
       
  } 
  updatePost(post) {  
    this.utilityService.updatePost(post.id, post)  
      .subscribe((res: any)=> {
        console.log(res)
      })
  } 
}
