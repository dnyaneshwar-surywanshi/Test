import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any[];
  constructor(private _post: PostService) { }

  ngOnInit() {
    this._post.getPost().subscribe((res: any) => {
      this.posts = res;
    })
  }

  createPost(input: HTMLInputElement) {

    let post = {
      title : input.value
    };

    input.value = '';

    this._post.createPost(post).subscribe((res: any) => {
      post['id'] = res.id;
      this.posts.splice(0, 0, post);
      console.log(res);
    })
  }

  // updatePost(post) {

  //   this._post.updatePost(post).subscribe(
  //     (res: any) => {
  //       console.log(res);
  //     }
  //   )
  // }

  updatePost(post) {  
    this._post.updatePost(post.id, post)  
      .subscribe((res: any)=> {
        console.log(res)
      })
  } 

  deletePost(post) {

    this._post.delete(post.id).subscribe(res => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
      console.log(res);
    });
      
    
    
  }

  create(post) {
    this._post.createPost(post).subscribe(res => {
      console.log(res);
    })
  }
}
