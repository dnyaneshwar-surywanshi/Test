import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }

  // userName = new Subject<any>();

  userName = new BehaviorSubject('Codemindtechnology');
  getPost() {
    return this.httpClient.get(this.url);
  }

  createPost(post) {
    return this.httpClient.post(this.url, JSON.stringify(post));
  }

  delete(id) {
    return this.httpClient.delete(this.url + '/' + id);
  }

  updatePost( id, post) : Observable<any> {

    let newpost = 	 {
      userId: 1,
      id: 1,
      title: "This is updated title",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }

    return this.httpClient.put<any>(this.url + '/' + id , JSON.stringify(newpost));
    
  }
}
